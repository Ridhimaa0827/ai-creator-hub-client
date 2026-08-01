import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { getProfile } from "../api/authApi";

import Sidebar from "../components/dashboard/Sidebar";
import DashboardNavbar from "../components/dashboard/DashboardNavbar";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login", { replace: true});
  };

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      const res = await getProfile(token);
      setUser(res.data.user);
    } catch (err) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/login", { replace: true});
    }
  };

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#030712] text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#030712] text-white">

      <Sidebar />

      <div className="flex-1">

        <DashboardNavbar
          user={user}
          onLogout={handleLogout}
        />

        <main className="p-8">
          <Outlet context={{ user }} />
        </main>

      </div>

    </div>
  );
}