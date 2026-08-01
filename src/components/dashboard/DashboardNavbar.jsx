import { FaBell, FaSearch, FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { useState, useEffect } from "react";
export default function DashboardNavbar({ user, onLogout }) {
  const [credits, setCredits] = useState(
    Number(localStorage.getItem("credits")) || 0,
  );
  useEffect(() => {
    const updateCredits = () => {
      setCredits(Number(localStorage.getItem("credits")) || 0);
    };
    window.addEventListener("creditsUpdated", updateCredits);
    return () => {
      window.removeEventListener("creditsUpdated", updateCredits);
    };
  }, []);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#030712]/80 backdrop-blur-xl">
      <div className="flex h-20 items-center justify-between px-8">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        <div className="hidden w-[400px] items-center rounded-xl bg-white/5 px-4 lg:flex">
          <FaSearch />
          <input
            className="w-full bg-transparent px-3 py-3 outline-none"
            placeholder="Search..."
          />
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-4 py-2">
            <span className="text-sm text-slate-400">Credits</span>

            <span
              className={`font-bold ${
                credits <= 5 ? "text-red-400" : "text-cyan-400"
              }`}
            >
              {credits <= 0 && (
                <button
                  onClick={() => (window.location.href = "/pricing")}
                  className="rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-2 font-semibold text-black"
                >
                  Upgrade Pro
                </button>
              )}
            </span>
          </div>
          <div className="rounded-xl bg-cyan-500/20 px-4 py-2">
            <span className="text-cyan-300 font-semibold">
              Credits: {credits}
            </span>
          </div>
          <FaBell className="text-xl" />
          <div className="flex items-center gap-3">
            <FaUserCircle className="text-4xl text-cyan-400" />
            <div>
              <h2>{user.name}</h2>
              <p className="text-sm text-slate-400">{user.email}</p>
            </div>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center gap-2 rounded-xl bg-red-500 px-5 py-3"
          >
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
