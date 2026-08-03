import { useState } from "react";
import { FaMagic, FaSpinner, FaLightbulb } from "react-icons/fa";
import { chatWithAI } from "../../api/aiApi";
const suggestions = [
  "Plan my week",
  "Summarize a long article",
  "Brainstorm project ideas",
  "Write a professional email",
];
export default function Assistant() {
  const [task, setTask] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const handleRun = async (customTask) => {
    const finalTask = (customTask ?? task).trim();
    if (!finalTask || loading) return;
    setTask(finalTask);
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await chatWithAI(finalTask, token);
      setResult(res.data.reply);
      localStorage.setItem("credits", res.data.credits);
      window.dispatchEvent(new Event("creditsUpdated"));
    } catch (err) {
      setResult("⚠️ AI is unavailable right now.");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex h-[calc(100vh-120px)] flex-col rounded-3xl border border-white/10 bg-white/5">
      <div className="flex items-center gap-3 border-b border-white/10 p-6">
        <FaMagic className="text-3xl text-cyan-400" />
        <div>
          <h2 className="text-2xl font-bold text-white">AI Assistant</h2>
          <p className="text-slate-400">
            Give it a task, and let it handle the thinking
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 border-b border-white/10 p-6">
        {suggestions.map((s) => (
          <button
            key={s}
            onClick={() => handleRun(s)}
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            <FaLightbulb className="text-xs" />
            {s}
          </button>
        ))}
      </div>
      <div className="flex-1 overflow-y-auto p-8">
        {!result && !loading ? (
          <div className="flex h-full flex-col items-center justify-center text-slate-500">
            <FaMagic className="mb-4 text-5xl" />
            <p>Describe a task below, or pick a suggestion above</p>
          </div>
        ) : loading ? (
          <div className="flex items-center gap-2 text-slate-400">
            <FaSpinner className="animate-spin" />
            Working on it...
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-[#0b0f1a] p-6">
            <p className="whitespace-pre-wrap text-white">{result}</p>
          </div>
        )}
      </div>
      <div className="border-t border-white/10 p-6">
        <div className="flex gap-4">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleRun()}
            placeholder="What do you need help with?"
            className="flex-1 rounded-2xl border border-white/10 bg-[#111827] px-5 py-4 text-white outline-none placeholder:text-slate-500"
          />
          <button
            onClick={() => handleRun()}
            disabled={loading}
            className="rounded-2xl bg-cyan-400 px-6 text-xl text-black transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? <FaSpinner className="animate-spin" /> : <FaMagic />}
          </button>
        </div>
      </div>
    </div>
  );
}
