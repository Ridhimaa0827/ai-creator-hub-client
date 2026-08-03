import { useNavigate, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 150);
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto mt-5 flex h-20 w-[92%] max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 backdrop-blur-xl">

        <h1
          onClick={() => navigate("/")}
          className="cursor-pointer text-xl font-bold tracking-wide text-white"
        >
          AI Creator Hub
        </h1>

        <nav className="hidden gap-8 text-sm text-gray-300 md:flex">

          <button onClick={() => handleScroll("features")} className="hover:text-cyan-400">
            Features
          </button>

          <button onClick={() => handleScroll("tools")} className="hover:text-cyan-400">
            Tools
          </button>

          <Link to="/pricing" className="hover:text-cyan-400">
            Pricing
          </Link>

          <button onClick={() => handleScroll("about")} className="hover:text-cyan-400">
            About
          </button>

        </nav>

        {!user ? (
          <Link
            to="/login"
            className="rounded-xl bg-cyan-400 px-5 py-2 font-medium text-black"
          >
            Login
          </Link>
        ) : (
          <div className="flex items-center gap-4">

            <button
              onClick={() => navigate("/dashboard")}
              className="text-cyan-400 hover:text-cyan-300"
            >
              Dashboard
            </button>

            <button
              onClick={() => navigate("/dashboard/profile")}
              className="flex items-center gap-2 text-white hover:text-cyan-400"
            >
              <FaUserCircle className="text-2xl" />
              {user.name}
            </button>

            <button
              onClick={handleLogout}
              className="rounded-xl border border-red-500 px-4 py-2 text-red-400 transition hover:bg-red-500 hover:text-white"
            >
              Logout
            </button>

          </div>
        )}

      </div>
    </header>
  );
}