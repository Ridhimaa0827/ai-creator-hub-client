import {
  FaBell,
  FaSearch,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

export default function DashboardNavbar({ user, onLogout }) {
  const [credits, setCredits] = useState(
    Number(localStorage.getItem("credits")) || 0
  );

  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef(null);

  useEffect(() => {
    const updateCredits = () => {
      setCredits(Number(localStorage.getItem("credits")) || 0);
    };

    window.addEventListener("creditsUpdated", updateCredits);

    return () => {
      window.removeEventListener("creditsUpdated", updateCredits);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const notifications = [
    {
      id: 1,
      title: "Welcome to AI Creator Hub",
      message: "Your AI workspace is ready to use.",
      time: "Just now",
    },
    {
      id: 2,
      title: "AI Tools Available",
      message: "Try Chat, Image Generator and Code Generator.",
      time: "Today",
    },
    ...(credits <= 5
      ? [
          {
            id: 3,
            title: "Low Credits",
            message: "You are running low on credits. Upgrade to Pro.",
            time: "Now",
          },
        ]
      : []),
  ];

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
            <span className="font-semibold text-cyan-300">
              Credits: {credits}
            </span>
          </div>

          <div className="relative" ref={notificationRef}>
            <button
              type="button"
              onClick={() => setShowNotifications((prev) => !prev)}
              className="relative flex h-11 w-11 items-center justify-center rounded-xl text-xl text-slate-300 transition hover:bg-white/10 hover:text-cyan-400"
            >
              <FaBell />

              {notifications.length > 0 && (
                <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-red-500" />
              )}
            </button>

            {showNotifications && (
              <div className="absolute right-0 top-14 w-80 overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f1a] shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <h3 className="font-bold text-white">
                    Notifications
                  </h3>

                  <span className="rounded-full bg-cyan-500/20 px-2 py-1 text-xs text-cyan-400">
                    {notifications.length}
                  </span>
                </div>

                <div className="max-h-80 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className="border-b border-white/5 px-5 py-4 transition hover:bg-white/5"
                    >
                      <div className="flex gap-3">
                        <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />

                        <div>
                          <h4 className="text-sm font-semibold text-white">
                            {notification.title}
                          </h4>

                          <p className="mt-1 text-xs leading-5 text-slate-400">
                            {notification.message}
                          </p>

                          <p className="mt-2 text-[11px] text-slate-500">
                            {notification.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center gap-3">
            <FaUserCircle className="text-4xl text-cyan-400" />

            <div>
              <h2>{user.name}</h2>

              <p className="text-sm text-slate-400">
                {user.email}
              </p>
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