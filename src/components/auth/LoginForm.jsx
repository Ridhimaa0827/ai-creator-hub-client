import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import { loginUser } from "../../api/authApi";

export default function LoginForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser(formData);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("credits", res.data.user.credits);

      window.dispatchEvent(new Event("creditsUpdated"));

      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-5"
    >
      {/* Email */}

      <div>
        <label className="mb-2 block text-sm text-slate-300">
          Email Address
        </label>

        <div className="flex items-center rounded-2xl border border-white/10 bg-white/5 px-4">
          <FaEnvelope className="text-cyan-400" />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full bg-transparent px-4 py-3 text-white outline-none placeholder:text-slate-500"
          />
        </div>
      </div>

      {/* Password */}

      <div>
        <label className="mb-2 block text-sm text-slate-300">
          Password
        </label>

        <div className="flex items-center rounded-2xl border border-white/10 bg-white/5 px-4">
          <FaLock className="text-cyan-400" />

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full bg-transparent px-4 py-3 text-white outline-none placeholder:text-slate-500"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-slate-400"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
      </div>

      {/* Remember + Forgot */}

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 text-slate-300">
          <input type="checkbox" />
          Remember me
        </label>

        <Link
          to="/forgot-password"
          className="text-cyan-400 transition hover:text-cyan-300"
        >
          Forgot Password?
        </Link>
      </div>

      {/* Login */}

      <button
        type="submit"
        className="w-full rounded-2xl bg-gradient-to-r from-cyan-400 to-violet-500 py-3 text-lg font-semibold text-white transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(34,211,238,.35)]"
      >
        Sign In
      </button>

      {/* Divider */}

      <div className="relative py-2">
        <div className="absolute left-0 right-0 top-1/2 h-px bg-white/10"></div>

        <span className="relative mx-auto block w-fit bg-[#060816] px-4 text-slate-400">
          OR
        </span>
      </div>

      {/* Google */}

      <button
        type="button"
        className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 py-3 text-white transition hover:bg-white/10"
      >
        <FaGoogle className="text-red-400" />

        Continue with Google
      </button>

      {/* Signup */}

      <p className="text-center text-slate-400">
        Don't have an account?{" "}
        <button
          type="button"
          onClick={() => navigate("/signup")}
          className="font-semibold text-cyan-400 hover:text-cyan-300"
        >
          Create Account
        </button>
      </p>
    </motion.form>
  );
}