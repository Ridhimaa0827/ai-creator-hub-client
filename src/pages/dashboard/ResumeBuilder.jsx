import { useState } from "react";
import { FaFileAlt, FaMagic, FaSpinner, FaDownload } from "react-icons/fa";
import { chatWithAI } from "../../api/aiApi";

export default function ResumeBuilder() {
  const [form, setForm] = useState({
    name: "",
    role: "",
    experience: "",
    skills: "",
  });
  const [loading, setLoading] = useState(false);
  const [resume, setResume] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleGenerate = async () => {
    if (!form.name.trim() || !form.role.trim() || loading) return;

    setLoading(true);

    try {
      const token = localStorage.getItem("token");

      const prompt = `Write a professional resume in plain text for:
Name: ${form.name}
Target Role: ${form.role}
Experience/Projects: ${form.experience || "Not provided"}
Skills: ${form.skills || "Not provided"}

Format it with clear sections (Summary, Experience, Skills). Keep it concise and ready to use.`;

      const res = await chatWithAI(prompt, token);

      setResume(res.data.reply);
    } catch (err) {
      setResume("⚠️ AI is unavailable right now.");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!resume) return;
    const blob = new Blob([resume], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${form.name || "resume"}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex h-[calc(100vh-120px)] flex-col rounded-3xl border border-white/10 bg-white/5">
      <div className="flex items-center gap-3 border-b border-white/10 p-6">
        <FaFileAlt className="text-3xl text-cyan-400" />
        <div>
          <h2 className="text-2xl font-bold text-white">Resume Builder</h2>
          <p className="text-slate-400">Fill your details and generate a resume draft</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-6 overflow-y-auto p-6 lg:flex-row">
        <div className="flex-1 space-y-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full rounded-2xl border border-white/10 bg-[#111827] px-5 py-3 text-white outline-none placeholder:text-slate-500"
          />
          <input
            type="text"
            name="role"
            value={form.role}
            onChange={handleChange}
            placeholder="Target Role (e.g. Full-Stack Developer)"
            className="w-full rounded-2xl border border-white/10 bg-[#111827] px-5 py-3 text-white outline-none placeholder:text-slate-500"
          />
          <textarea
            name="experience"
            value={form.experience}
            onChange={handleChange}
            placeholder="Experience / Projects"
            rows={4}
            className="w-full rounded-2xl border border-white/10 bg-[#111827] px-5 py-3 text-white outline-none placeholder:text-slate-500"
          />
          <textarea
            name="skills"
            value={form.skills}
            onChange={handleChange}
            placeholder="Skills (comma separated)"
            rows={3}
            className="w-full rounded-2xl border border-white/10 bg-[#111827] px-5 py-3 text-white outline-none placeholder:text-slate-500"
          />

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-violet-500 py-3 text-lg font-semibold text-black transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? <FaSpinner className="animate-spin" /> : <FaMagic />}
            {loading ? "Generating..." : "Generate Resume"}
          </button>
        </div>

        <div className="flex-1 rounded-2xl border border-white/10 bg-[#0b0f1a] p-6">
          {!resume ? (
            <div className="flex h-full flex-col items-center justify-center text-slate-500">
              <FaFileAlt className="mb-4 text-5xl" />
              <p>Your generated resume will appear here</p>
            </div>
          ) : (
            <>
              <pre className="mb-4 whitespace-pre-wrap text-sm text-slate-200">
                {resume}
              </pre>
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm text-cyan-400 hover:bg-white/10"
              >
                <FaDownload />
                Download
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}