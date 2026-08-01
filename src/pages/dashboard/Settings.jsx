import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCog, FaSignOutAlt, FaBell, FaMoon } from "react-icons/fa";

export default function Settings() {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="flex h-[calc(100vh-120px)] flex-col rounded-3xl border border-white/10 bg-white/5">
 
      <div className="flex items-center gap-3 border-b border-white/10 p-6">
        <FaCog className="text-3xl text-cyan-400" />
        <div>
          <h2 className="text-2xl font-bold text-white">Settings</h2>
          <p className="text-slate-400">Manage your preferences</p>
        </div>
      </div>

      <div className="mx-auto w-full max-w-md flex-1 space-y-4 p-8">
       
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#111827] px-5 py-4">
          <div className="flex items-center gap-3 text-white">
            <FaBell className="text-cyan-400" />
            Notifications
          </div>
          <button
            onClick={() => setNotifications(!notifications)}
            className={`h-7 w-12 rounded-full transition ${
              notifications ? "bg-cyan-400" : "bg-white/10"
            }`}
          >
            <div
              className={`h-6 w-6 translate-y-0.5 rounded-full bg-white transition ${
                notifications ? "translate-x-6" : "translate-x-0.5"
              }`}
            />
          </button>
        </div>

     
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#111827] px-5 py-4">
          <div className="flex items-center gap-3 text-white">
            <FaMoon className="text-cyan-400" />
            Dark Mode
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`h-7 w-12 rounded-full transition ${
              darkMode ? "bg-cyan-400" : "bg-white/10"
            }`}
          >
            <div
              className={`h-6 w-6 translate-y-0.5 rounded-full bg-white transition ${
                darkMode ? "translate-x-6" : "translate-x-0.5"
              }`}
            />
          </button>
        </div>

  
        <button
          onClick={handleLogout}
          className="flex w-full items-center justify-center gap-2 rounded-2xl border border-red-500/30 bg-red-500/10 py-3 text-lg font-semibold text-red-400 transition hover:bg-red-500/20"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </div>
  );
}