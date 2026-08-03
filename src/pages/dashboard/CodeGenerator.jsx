import { useState } from "react";
import { FaCode, FaMagic, FaCopy, FaSpinner, FaCheck } from "react-icons/fa";
import { generateCode } from "../../api/aiApi";
const languages = [
  "JavaScript",
  "Python",
  "Java",
  "C++",
  "React",
  "Node.js",
  "HTML/CSS",
  "SQL",
];
export default function CodeGenerator() {
  const [prompt, setPrompt] = useState("");
  const [language, setLanguage] = useState("JavaScript");
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState("");
  const [copied, setCopied] = useState(false);
  const handleGenerate = async () => {
    const text = prompt.trim();
    if (!text || loading) return;
    setLoading(true);
    setCopied(false);
    try {
      const token = localStorage.getItem("token");
      const finalPrompt = `Write ${language} code for: ${text}. Only return the code, no explanation.`;
      const res = await generateCode(finalPrompt, token);
      setCode(res.data.reply);
      localStorage.setItem("credits", res.data.credits);
      window.dispatchEvent(new Event("creditsUpdated"));
    } catch (err) {
      setCode("⚠️ AI is unavailable right now.");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const handleCopy = async () => {
    if (!code) return;
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div className="flex h-[calc(100vh-120px)] flex-col rounded-3xl border border-white/10 bg-white/5">
      <div className="flex items-center gap-3 border-b border-white/10 p-6">
        <FaCode className="text-3xl text-cyan-400" />
        <div>
          <h2 className="text-2xl font-bold text-white">Code Generator</h2>
          <p className="text-slate-400">Describe what you need, get ready-to-use code</p>
        </div>
      </div>
      <div className="space-y-4 border-b border-white/10 p-6">
        <div className="flex flex-col gap-4 sm:flex-row">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
            placeholder="e.g. Function to reverse a linked list"
            className="flex-1 rounded-2xl border border-white/10 bg-[#111827] px-5 py-4 text-white outline-none placeholder:text-slate-500"
          />
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="rounded-2xl border border-white/10 bg-[#111827] px-5 py-4 text-white outline-none"
          >
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-4 text-lg font-semibold text-black transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? <FaSpinner className="animate-spin" /> : <FaMagic />}
            {loading ? "Generating..." : "Generate"}
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-6">
        {!code ? (
          <div className="flex h-full flex-col items-center justify-center text-slate-500">
            <FaCode className="mb-4 text-5xl" />
            <p>Your generated code will appear here</p>
          </div>
        ) : (
          <div className="relative rounded-2xl border border-white/10 bg-[#0b0f1a]">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
              <span className="text-sm text-slate-400">{language}</span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300"
              >
                {copied ? <FaCheck /> : <FaCopy />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
            <pre className="overflow-x-auto p-5 text-sm text-slate-200">
              <code>{code}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}