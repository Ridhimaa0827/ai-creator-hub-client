import { useState, useEffect } from "react";
import { FaUser, FaSave, FaSpinner } from "react-icons/fa";

export default function Profile() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      const user = JSON.parse(stored);
      setForm({ name: user.name || "", email: user.email || "" });
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSaved(false);
  };

  const handleSave = async () => {
    setSaving(true);

    try {
      
      await new Promise((resolve) => setTimeout(resolve, 800));
      const stored = localStorage.getItem("user");
      const user = stored ? JSON.parse(stored) : {};
      localStorage.setItem("user", JSON.stringify({ ...user, ...form }));
      setSaved(true);
    } catch (err) {
      alert("Failed to save profile");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="flex h-[calc(100vh-120px)] flex-col rounded-3xl border border-white/10 bg-white/5">
     
      <div className="flex items-center gap-3 border-b border-white/10 p-6">
        <FaUser className="text-3xl text-cyan-400" />
        <div>
          <h2 className="text-2xl font-bold text-white">Profile</h2>
          <p className="text-slate-400">Manage your account details</p>
        </div>
      </div>

  
      <div className="mx-auto w-full max-w-md flex-1 space-y-5 p-8">
        <div className="flex justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-4xl font-bold text-white">
            {form.name ? form.name[0].toUpperCase() : <FaUser />}
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-300">Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full rounded-2xl border border-white/10 bg-[#111827] px-5 py-3 text-white outline-none placeholder:text-slate-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-300">Email Address</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full rounded-2xl border border-white/10 bg-[#111827] px-5 py-3 text-white outline-none placeholder:text-slate-500"
          />
        </div>

        <button
          onClick={handleSave}
          disabled={saving}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-violet-500 py-3 text-lg font-semibold text-black transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {saving ? <FaSpinner className="animate-spin" /> : <FaSave />}
          {saving ? "Saving..." : saved ? "Saved!" : "Save Changes"}
        </button>
      </div>
    </div>
  );
}