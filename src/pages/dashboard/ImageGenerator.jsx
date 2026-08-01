import { useState } from "react";
import { FaImage, FaMagic, FaDownload, FaSpinner } from "react-icons/fa";
import { generateImage } from "../../api/imageApi";

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);

  const handleGenerate = async () => {
  if (!prompt.trim()) return;

  setLoading(true);

  try {
    const token = localStorage.getItem("token");

    const res = await generateImage(prompt, token);
    localStorage.setItem("credits", res.data.credits);
    window.dispatchEvent(new Event("creditsUpdated"));
    setImages((prev) => [
      res.data.image,
      ...prev,
    ]);
    localStorage.setItem("credits", res.data.credits);
window.dispatchEvent(new Event("creditsUpdated"));

    setPrompt("");
  } catch (error) {
  console.log("========== IMAGE ERROR ==========");
  console.log("Status:", error.response?.status);
  console.log("Data:", error.response?.data);
  console.log("Message:", error.message);
  console.log("===============================");

  alert(error.response?.data?.message || "Image generation failed");
}
  }
  return (
    <div className="flex h-[calc(100vh-120px)] flex-col rounded-3xl border border-white/10 bg-white/5">
      <div className="flex items-center gap-3 border-b border-white/10 p-6">
        <FaImage className="text-3xl text-cyan-400" />
        <div>
          <h2 className="text-2xl font-bold text-white">Image Generator</h2>
          <p className="text-slate-400">Turn your ideas into AI-generated images</p>
        </div>
      </div>
      <div className="border-b border-white/10 p-6">
        <div className="flex gap-4">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
            placeholder="Describe the image you want to create..."
            className="flex-1 rounded-2xl border border-white/10 bg-[#111827] px-5 py-4 text-white outline-none placeholder:text-slate-500"
          />

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-violet-500 px-6 text-lg font-semibold text-black transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <FaSpinner className="animate-spin" />
            ) : (
              <FaMagic />
            )}
            {loading ? "Generating..." : "Generate"}
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-8">
        {images.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center text-slate-500">
            <FaImage className="mb-4 text-5xl" />
            <p>Your generated images will appear here</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
            {images.map((src, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              >
                <img
                  src={src}
                  alt={`Generated ${index + 1}`}
                  className="h-full w-full object-cover"
                />
                <a
                  href={src}
                  download={`ai-image-${index + 1}.png`}
                  className="absolute bottom-3 right-3 flex items-center gap-2 rounded-xl bg-black/60 px-3 py-2 text-sm text-white opacity-0 transition group-hover:opacity-100"
                >
                  <FaDownload />
                  Download
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}