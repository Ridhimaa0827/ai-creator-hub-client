import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../api/authApi";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
export default function SignupForm({ }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  try {
    const res = await registerUser({
      name: formData.name,
      email: formData.email,
      password: formData.password,
    });

    alert("Registration successful! Please verify your email.");
    navigate("/verify-email", {
      state: {
        email: formData.email,
      },
    });
  } catch (err) {
    alert(err.response?.data?.message || "Registration Failed");
  }
};
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  return (
    <motion.form onSubmit={handleSubmit}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-5"
    >
      <div>
        <label className="mb-2 block text-sm text-slate-300">Full Name</label>
        <div className="flex items-center rounded-2xl border border-white/10 bg-white/5 px-4">
          <FaUser className="text-cyan-400" />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full bg-transparent px-4 py-3 text-white outline-none placeholder:text-slate-500"
          />
        </div>
      </div>
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
      <div>
        <label className="mb-2 block text-sm text-slate-300">Password</label>
        <div className="flex items-center rounded-2xl border border-white/10 bg-white/5 px-4">
          <FaLock className="text-cyan-400" />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create password"
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
      <div>
        <label className="mb-2 block text-sm text-slate-300">
          Confirm Password
        </label>
        <div className="flex items-center rounded-2xl border border-white/10 bg-white/5 px-4">
          <FaLock className="text-cyan-400" />
          <input
            type={showConfirm ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm password"
            className="w-full bg-transparent px-4 py-3 text-white outline-none placeholder:text-slate-500"
          />
          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            className="text-slate-400"
          >
            {showConfirm ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
      </div>
      <button
        type="submit"
        className="w-full rounded-2xl bg-gradient-to-r from-cyan-400 to-violet-500 py-3 text-lg font-semibold text-white transition hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(34,211,238,.35)]"
      >
        Create Account
      </button>
      <div className="relative py-1">
        <div className="absolute left-0 right-0 top-1/2 h-px bg-white/10"></div>
        <span className="relative mx-auto block w-fit bg-[#060816] px-4 text-slate-400">
          OR
        </span>
      </div>
      <button
        type="button"
        className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 py-3 text-white transition hover:bg-white/10"
      >
        <FaGoogle className="text-red-400" />
        Continue with Google
      </button>
      <p className="text-center text-slate-400">
        Already have an account?{" "}
        <button
          type="button"
          onClick={() => navigate("/login")}
          className="font-semibold text-cyan-400 hover:text-cyan-300"
        >
          Sign In
        </button>
      </p>
      
    </motion.form>
  );
}
