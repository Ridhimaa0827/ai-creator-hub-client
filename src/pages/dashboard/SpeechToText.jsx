import { useState, useRef } from "react";
import { FaMicrophone, FaStop, FaCopy, FaCheck } from "react-icons/fa";
import { chatWithAI } from "../../api/aiApi";

export default function SpeechToText() {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");
  const recognitionRef = useRef(null);

  const handleToggle = () => {
    if (listening) {
      recognitionRef.current?.stop();
      setListening(false);
      return;
    }

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setError("Speech recognition is not supported in this browser. Try Chrome.");
      return;
    }

    setError("");

   

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-IN";

    recognition.onresult = (event) => {
      let text = "";
      for (let i = 0; i < event.results.length; i++) {
        text += event.results[i][0].transcript;
      }
      setTranscript(text);
    };

    recognition.onerror = (event) => {
      setError(`Error: ${event.error}`);
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognitionRef.current = recognition;
    recognition.start();
    setListening(true);
  };

  const handleCopy = async () => {
    if (!transcript) return;
    await navigator.clipboard.writeText(transcript);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex h-[calc(100vh-120px)] flex-col rounded-3xl border border-white/10 bg-white/5">
     
      <div className="flex items-center gap-3 border-b border-white/10 p-6">
        <FaMicrophone className="text-3xl text-cyan-400" />
        <div>
          <h2 className="text-2xl font-bold text-white">Speech to Text</h2>
          <p className="text-slate-400">Speak and get an instant text transcript</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 border-b border-white/10 p-10">
        <button
          onClick={handleToggle}
          className={`flex h-24 w-24 items-center justify-center rounded-full text-3xl text-white transition ${
            listening
              ? "animate-pulse bg-red-500 shadow-[0_0_35px_rgba(239,68,68,.5)]"
              : "bg-gradient-to-r from-cyan-400 to-violet-500 hover:scale-105"
          }`}
        >
          {listening ? <FaStop /> : <FaMicrophone />}
        </button>
        <p className="text-slate-400">
          {listening ? "Listening... tap to stop" : "Tap to start speaking"}
        </p>
        {error && <p className="text-sm text-red-400">{error}</p>}
      </div>

    
      <div className="flex-1 overflow-y-auto p-8">
        {!transcript ? (
          <div className="flex h-full flex-col items-center justify-center text-slate-500">
            <FaMicrophone className="mb-4 text-5xl" />
            <p>Your transcript will appear here</p>
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-[#0b0f1a] p-6">
            <p className="mb-4 whitespace-pre-wrap text-white">{transcript}</p>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm text-cyan-400 hover:bg-white/10"
            >
              {copied ? <FaCheck /> : <FaCopy />}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}