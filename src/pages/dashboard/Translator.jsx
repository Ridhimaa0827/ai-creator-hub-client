import { useState } from "react";
import { FaLanguage, FaExchangeAlt, FaSpinner, FaCopy, FaCheck } from "react-icons/fa";
import { chatWithAI } from "../../api/aiApi";

const languages = [
  "English",
  "Hindi",
  "Punjabi",
  "Spanish",
  "French",
  "German",
  "Japanese",
  "Chinese",
];

export default function Translator() {
  const [sourceText, setSourceText] = useState("");
  const [sourceLang, setSourceLang] = useState("English");
  const [targetLang, setTargetLang] = useState("Hindi");
  const [translated, setTranslated] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleTranslate = async () => {
    if (!sourceText.trim() || loading) return;

    setLoading(true);
    setCopied(false);

    try {
      const token = localStorage.getItem("token");

      const prompt = `Translate the following text from ${sourceLang} to ${targetLang}. Only return the translated text, nothing else:\n\n${sourceText}`;

      const res = await chatWithAI(prompt, token);

      setTranslated(res.data.reply);
    } catch (err) {
      setTranslated("⚠️ AI is unavailable right now.");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSwap = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
  };

  const handleCopy = async () => {
    if (!translated) return;
    await navigator.clipboard.writeText(translated);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex h-[calc(100vh-120px)] flex-col rounded-3xl border border-white/10 bg-white/5">
      <div className="flex items-center gap-3 border-b border-white/10 p-6">
        <FaLanguage className="text-3xl text-cyan-400" />
        <div>
          <h2 className="text-2xl font-bold text-white">Translator</h2>
          <p className="text-slate-400">Translate text between languages instantly</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 border-b border-white/10 p-6">
        <select
          value={sourceLang}
          onChange={(e) => setSourceLang(e.target.value)}
          className="rounded-2xl border border-white/10 bg-[#111827] px-5 py-3 text-white outline-none"
        >
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>

        <button
          onClick={handleSwap}
          className="rounded-xl border border-white/10 p-3 text-cyan-400 transition hover:bg-white/10"
        >
          <FaExchangeAlt />
        </button>

        <select
          value={targetLang}
          onChange={(e) => setTargetLang(e.target.value)}
          className="rounded-2xl border border-white/10 bg-[#111827] px-5 py-3 text-white outline-none"
        >
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </div>
      <div className="grid flex-1 grid-cols-1 gap-6 overflow-y-auto p-6 md:grid-cols-2">
        <div className="flex flex-col">
          <textarea
            value={sourceText}
            onChange={(e) => setSourceText(e.target.value)}
            placeholder="Enter text to translate..."
            className="h-full min-h-[200px] rounded-2xl border border-white/10 bg-[#111827] p-5 text-white outline-none placeholder:text-slate-500"
          />
        </div>

        <div className="flex flex-col rounded-2xl border border-white/10 bg-[#0b0f1a] p-5">
          {!translated ? (
            <div className="flex h-full flex-col items-center justify-center text-slate-500">
              <FaLanguage className="mb-4 text-5xl" />
              <p>Translation will appear here</p>
            </div>
          ) : (
            <>
              <p className="flex-1 whitespace-pre-wrap text-white">{translated}</p>
              <button
                onClick={handleCopy}
                className="mt-4 flex items-center gap-2 self-start rounded-xl border border-white/10 px-4 py-2 text-sm text-cyan-400 hover:bg-white/10"
              >
                {copied ? <FaCheck /> : <FaCopy />}
                {copied ? "Copied" : "Copy"}
              </button>
            </>
          )}
        </div>
      </div>

      <div className="border-t border-white/10 p-6">
        <button
          onClick={handleTranslate}
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-violet-500 py-3 text-lg font-semibold text-black transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? <FaSpinner className="animate-spin" /> : <FaLanguage />}
          {loading ? "Translating..." : "Translate"}
        </button>
      </div>
    </div>
  );
}