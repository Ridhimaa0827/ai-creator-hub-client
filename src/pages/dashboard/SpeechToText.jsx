import { useState, useRef } from "react";
import { FaMicrophone, FaStop, FaCopy, FaCheck } from "react-icons/fa";

export default function SpeechToText() {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  const recognitionRef = useRef(null);

  const handleToggle = async () => {
    console.log("MIC BUTTON CLICKED");

    if (listening) {
      recognitionRef.current?.stop();
      return;
    }

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setError(
        "Speech recognition is not supported in this browser. Please use Google Chrome."
      );
      return;
    }

    setError("");

    const recognition = new SpeechRecognition();

    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onstart = () => {
      console.log("RECOGNITION ONSTART");
      setListening(true);
      setError("");
    };

    recognition.onresult = (event) => {
      let newText = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          newText += event.results[i][0].transcript;
        }
      }

      if (newText.trim()) {
        setTranscript((prev) =>
          prev ? `${prev} ${newText.trim()}` : newText.trim()
        );
      }
    };

    recognition.onerror = (event) => {
      console.error("Speech Recognition Error:", event.error);

      if (event.error === "not-allowed") {
        setError(
          "Microphone permission denied. Please allow microphone access."
        );
      } else if (event.error === "no-speech") {
        setError("No speech detected. Please try again.");
      } else if (event.error === "audio-capture") {
        setError("No microphone was detected. Please check your microphone.");
      } else if (event.error === "network") {
        setError(
          "Speech recognition network error. Please check your internet connection."
        );
      } else {
        setError(`Speech recognition error: ${event.error}`);
      }

      setListening(false);
    };

    recognition.onend = () => {
      console.log("RECOGNITION ENDED");
      setListening(false);
    };

    recognitionRef.current = recognition;

    try {
      console.log("REQUESTING MICROPHONE...");

      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });

      console.log("MICROPHONE ACCESS GRANTED");

      stream.getTracks().forEach((track) => track.stop());

      console.log("STARTING RECOGNITION...");

      recognition.start();

      console.log("RECOGNITION STARTED");
    } catch (err) {
      console.error("MICROPHONE ERROR:", err);

      setListening(false);

      if (err.name === "NotAllowedError") {
        setError(
          "Microphone permission denied. Please allow microphone access and try again."
        );
      } else if (err.name === "NotFoundError") {
        setError(
          "No microphone found. Please connect or enable a microphone."
        );
      } else {
        setError(
          "Unable to access microphone. Please check your microphone settings."
        );
      }
    }
  };

  const handleCopy = async () => {
    if (!transcript) return;

    try {
      await navigator.clipboard.writeText(transcript);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch (err) {
      console.error("Copy failed:", err);
      setError("Unable to copy transcript.");
    }
  };

  const handleClear = () => {
    setTranscript("");
    setError("");
    setCopied(false);
  };

  return (
    <div className="flex h-[calc(100vh-120px)] flex-col rounded-3xl border border-white/10 bg-white/5">
      <div className="flex items-center gap-3 border-b border-white/10 p-6">
        <FaMicrophone className="text-3xl text-cyan-400" />

        <div>
          <h2 className="text-2xl font-bold text-white">
            Speech to Text
          </h2>

          <p className="text-slate-400">
            Speak and get an instant text transcript
          </p>
        </div>
      </div>

      <div className="relative z-50 flex flex-col items-center justify-center gap-4 border-b border-white/10 p-10">
        <button
          type="button"
          onClick={handleToggle}
          className={`relative z-50 flex h-24 w-24 cursor-pointer items-center justify-center rounded-full text-3xl text-white transition ${
            listening
              ? "animate-pulse bg-red-500 shadow-[0_0_35px_rgba(239,68,68,.5)]"
              : "bg-gradient-to-r from-cyan-400 to-violet-500 hover:scale-105"
          }`}
        >
          {listening ? <FaStop /> : <FaMicrophone />}
        </button>

        <p className="text-slate-400">
          {listening
            ? "Listening... tap to stop"
            : "Tap to start speaking"}
        </p>

        {error && (
          <p className="max-w-lg text-center text-sm text-red-400">
            {error}
          </p>
        )}
      </div>

      <div className="flex-1 overflow-y-auto p-8">
        {!transcript ? (
          <div className="flex h-full flex-col items-center justify-center text-slate-500">
            <FaMicrophone className="mb-4 text-5xl" />
            <p>Your transcript will appear here</p>
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-[#0b0f1a] p-6">
            <p className="mb-6 whitespace-pre-wrap text-white">
              {transcript}
            </p>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={handleCopy}
                className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm text-cyan-400 transition hover:bg-white/10"
              >
                {copied ? <FaCheck /> : <FaCopy />}
                {copied ? "Copied" : "Copy"}
              </button>

              <button
                type="button"
                onClick={handleClear}
                className="rounded-xl border border-white/10 px-4 py-2 text-sm text-slate-400 transition hover:bg-white/10"
              >
                Clear
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}