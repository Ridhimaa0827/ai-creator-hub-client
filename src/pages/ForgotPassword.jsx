import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendOTP, verifyOTP, resetPassword } from "../api/authApi";
export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const handleSendOTP = async () => {
    if (!email) {
      return alert("Enter your email");
    }

    try {
      setLoading(true);

      const res = await sendOTP(email);

      alert(res.data.message);

      setStep(2);
    } catch (err) {
      alert(err.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  const handleVerifyOTP = async () => {
    if (!otp) {
      return alert("Enter OTP");
    }

    try {
      setLoading(true);

      const res = await verifyOTP(email, otp);

      alert(res.data.message);

      setStep(3);
    } catch (err) {
      alert(err.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  const handleResetPassword = async () => {
    if (!password || !confirmPassword) {
      return alert("Fill all fields");
    }

    if (password !== confirmPassword) {
      return alert("Passwords do not match");
    }

    try {
      setLoading(true);

      const res = await resetPassword(email,otp, password);

      alert(res.data.message);

      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050816] px-6">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8">
        <h1 className="mb-2 text-3xl font-bold text-white">Forgot Password</h1>
        {step === 1 && (
          <>
            <p className="mb-8 text-slate-400">
              Enter your email to receive an OTP.
            </p>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-6 w-full rounded-2xl border border-white/10 bg-[#111827] px-5 py-4 text-white outline-none"
            />

            <button
              onClick={handleSendOTP}
              disabled={loading}
              className="w-full rounded-2xl bg-cyan-400 py-4 font-semibold text-black"
            >
              {loading ? "Sending..." : "Send OTP"}
            </button>
          </>
        )}
        {step === 2 && (
          <>
            <p className="mb-8 text-slate-400">
              Enter the OTP sent to your email.
            </p>

            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
              className="mb-6 w-full rounded-2xl border border-white/10 bg-[#111827] px-5 py-4 text-white outline-none"
            />

            <button
              onClick={handleVerifyOTP}
              disabled={loading}
              className="w-full rounded-2xl bg-cyan-400 py-4 font-semibold text-black"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </>
        )}
        {step === 3 && (
          <>
            <p className="mb-8 text-slate-400">Create your new password.</p>

            <input
              type="password"
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-4 w-full rounded-2xl border border-white/10 bg-[#111827] px-5 py-4 text-white outline-none"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mb-6 w-full rounded-2xl border border-white/10 bg-[#111827] px-5 py-4 text-white outline-none"
            />

            <button
              onClick={handleResetPassword}
              disabled={loading}
              className="w-full rounded-2xl bg-cyan-400 py-4 font-semibold text-black"
            >
              {loading ? "Updating..." : "Reset Password"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
