import {
  FaEnvelope,
  FaCoins,
  FaUserCircle,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProfileCard({ user }) {
  const navigate = useNavigate();

  const [credits, setCredits] = useState(
    Number(localStorage.getItem("credits")) || user.credits
  );

  useEffect(() => {
    const updateCredits = () => {
      setCredits(
        Number(localStorage.getItem("credits")) || user.credits
      );
    };

    window.addEventListener(
      "creditsUpdated",
      updateCredits
    );

    return () => {
      window.removeEventListener(
        "creditsUpdated",
        updateCredits
      );
    };
  }, [user.credits]);

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

      <h2 className="mb-8 text-3xl font-bold">
        Profile
      </h2>

      <div className="flex flex-col items-center">

        <FaUserCircle className="text-8xl text-cyan-400" />

        <h3 className="mt-5 text-2xl font-bold">
          {user.name}
        </h3>

        <span className="mt-2 rounded-full bg-cyan-500/20 px-4 py-1 text-cyan-400">
          {user.plan}
        </span>

      </div>

      <div className="mt-10 space-y-5">

        <div className="flex items-center gap-3">
          <FaEnvelope />
          {user.email}
        </div>

        <div className="flex items-center gap-3">
          <FaCoins />
          {credits} Credits
        </div>

      </div>

      <button
        onClick={() => navigate("/pricing")}
        className="mt-10 w-full rounded-xl bg-cyan-400 py-3 font-bold text-black transition hover:scale-105"
      >
        Upgrade to Pro
      </button>

    </div>
  );
}