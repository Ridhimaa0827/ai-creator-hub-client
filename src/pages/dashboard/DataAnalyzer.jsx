import { useState } from "react";
import { FaChartBar, FaUpload, FaSpinner, FaFileCsv } from "react-icons/fa";
import { chatWithAI } from "../../api/aiApi";
const MAX_CHARS = 6000;
export default function DataAnalyzer() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState("");
  const handleFileChange = (e) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      setSummary("");
    }
  };
  const readFileAsText = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsText(file);
    });
  };
  const handleAnalyze = async () => {
    if (!file || loading) return;
    if (file.name.toLowerCase().endsWith(".xlsx")) {
      setSummary(
        "⚠️ XLSX files aren't supported yet — please export/save as CSV and upload that instead.",
      );
      return;
    }
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const rawText = await readFileAsText(file);
      const truncated = rawText.slice(0, MAX_CHARS);
      const prompt = `Analyze the following ${file.name.endsWith(".json") ? "JSON" : "CSV"} data and give a clear summary: key columns/fields, patterns, notable numbers, and any obvious issues. Data:\n\n${truncated}${rawText.length > MAX_CHARS ? "\n\n(...truncated, file is larger than shown)" : ""}`;
      const res = await chatWithAI(prompt, token);
      setSummary(res.data.reply);
      localStorage.setItem("credits", res.data.credits);
      window.dispatchEvent(new Event("creditsUpdated"));
    } catch (err) {
      setSummary("⚠️ AI is unavailable right now.");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex h-[calc(100vh-120px)] flex-col rounded-3xl border border-white/10 bg-white/5">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-white/10 p-6">
        <FaChartBar className="text-3xl text-cyan-400" />
        <div>
          <h2 className="text-2xl font-bold text-white">Data Analyzer</h2>
          <p className="text-slate-400">
            Upload a CSV or JSON file and get an instant summary
          </p>
        </div>
      </div>
      <div className="border-b border-white/10 p-6">
        <label className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-white/20 bg-[#111827] px-6 py-10 text-slate-400 transition hover:border-cyan-400 hover:text-cyan-400">
          <FaUpload className="text-3xl" />
          <span>{file ? file.name : "Click to upload CSV or JSON"}</span>
          <input
            type="file"
            accept=".csv,.json"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
        <button
          onClick={handleAnalyze}
          disabled={!file || loading}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-violet-500 py-3 text-lg font-semibold text-black transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? <FaSpinner className="animate-spin" /> : <FaChartBar />}
          {loading ? "Analyzing..." : "Analyze Data"}
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-8">
        {!summary ? (
          <div className="flex h-full flex-col items-center justify-center text-slate-500">
            <FaFileCsv className="mb-4 text-5xl" />
            <p>Your data summary will appear here</p>
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-[#0b0f1a] p-6">
            <pre className="whitespace-pre-wrap text-sm text-slate-200">
              {summary}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
