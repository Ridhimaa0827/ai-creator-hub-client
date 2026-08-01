import { useState, useRef, useEffect } from "react";
import { FaRobot, FaPaperPlane, FaUser, FaSpinner } from "react-icons/fa";
import { chatWithAI, getHistory } from "../../api/aiApi";
import { useNavigate } from "react-router-dom";
export default function Chat() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showUpgrade, setShowUpgrade] = useState(false);
  const bottomRef = useRef(null);
  useEffect(() => {
    const loadHistory = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await getHistory(token);
        const history = [];
        res.data.chats.forEach((chat) => {
          history.push({
            role: "user",
            text: chat.prompt,
          });
          history.push({
            role: "bot",
            text: chat.reply,
          });
        });
        if (history.length > 0) {
          setMessages(history);
        } else {
          setMessages([
            {
              role: "bot",
              text: "👋 Hello! I'm your AI Assistant.\nHow can I help you today?",
            },
          ]);
        }
      } catch (err) {
        console.log(err);
        setMessages([
          {
            role: "bot",
            text: "👋 Hello! I'm your AI Assistant.\nHow can I help you today?",
          },
        ]);
      }
    };
    loadHistory();
  }, []);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);
  const handleSend = async () => {
  const text = input.trim();
  if (!text || loading) return;
  setMessages((prev) => [
    ...prev,
    {
      role: "user",
      text,
    },
  ]);
  setInput("");
  setLoading(true);
  try {
    const token = localStorage.getItem("token");
    const res = await chatWithAI(text, token);
    localStorage.setItem("credits", res.data.credits);
    window.dispatchEvent(new Event("creditsUpdated"));
    setMessages((prev) => [
      ...prev,
      {
        role: "bot",
        text: res.data.reply,
      },
    ]);
    if (res.data.credits === 0) {
      setShowUpgrade(true);
    }
  } catch (err) {
    console.log(err);
  if (
      err.response?.data?.message ===
      "No credits left. Upgrade to Pro."
    ) {
      setShowUpgrade(true);
      return;
    }
    setMessages((prev) => [
      ...prev,
      {
        role: "bot",
        text: "⚠️ AI is unavailable right now.",
      },
    ]);
  } finally {
    setLoading(false);
  }
};
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  return (
    <div className="flex h-[calc(100vh-120px)] flex-col rounded-3xl border border-white/10 bg-white/5">
      <div className="flex items-center gap-3 border-b border-white/10 p-6">
        <FaRobot className="text-3xl text-cyan-400" />
        <div>
          <h2 className="text-2xl font-bold text-white">
            AI Chat
          </h2>
          <p className="text-slate-400">
            Ask anything to your AI Assistant
          </p>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto space-y-6 p-8">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-start gap-3 ${
              msg.role === "user" ? "flex-row-reverse" : ""
            }`}
          >
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-full ${
                msg.role === "user"
                  ? "bg-violet-500/20 text-violet-300"
                  : "bg-cyan-500/20 text-cyan-300"
              }`}
            >
              {msg.role === "user" ? <FaUser /> : <FaRobot />}
            </div>
            <div
              className={`max-w-xl whitespace-pre-line rounded-2xl px-5 py-4 text-white ${
                msg.role === "user"
                  ? "bg-violet-500/20"
                  : "bg-cyan-500/20"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300">
              <FaRobot />
            </div>
            <div className="flex items-center gap-2 rounded-2xl bg-cyan-500/20 px-5 py-4 text-white">
              <FaSpinner className="animate-spin" />
              Thinking...
            </div>
          </div>
        )}
        {showUpgrade && (
  <div className="mx-auto mt-6 w-full max-w-xl rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-6 text-center">
    <h2 className="mb-2 text-2xl font-bold text-yellow-300">
      No Credits Left
    </h2>
    <p className="mb-6 text-slate-300">
      You have used all your free AI credits.
      Upgrade to Pro for unlimited access.
    </p>
    <button
      onClick={() => navigate("/pricing")}
      className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:scale-105"
    >
      Upgrade to Pro
    </button>
  </div>
)}
        <div ref={bottomRef}></div>
      </div>
      {/* Input */}
      <div className="border-t border-white/10 p-6">
        <div className="flex gap-4">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask anything..."
            className="flex-1 rounded-2xl border border-white/10 bg-[#111827] px-5 py-4 text-white outline-none placeholder:text-slate-500"
          />
          <button
            onClick={handleSend}
            disabled={loading}
            className="rounded-2xl bg-cyan-400 px-6 text-black text-xl transition hover:scale-105 disabled:opacity-50"
          >
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );
}