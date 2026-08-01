import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyEmail } from "../api/authApi";

export default function VerifyEmail() {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState(location.state?.email || "");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    if (!email || !otp) {
      return alert("Please fill all fields");
    }

    try {
      setLoading(true);

      const res = await verifyEmail(email, otp);

      alert(res.data.message);

      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Verification Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050816] px-6">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8">
        <h1 className="mb-2 text-3xl font-bold text-white">
          Verify Email
        </h1>

        <p className="mb-8 text-slate-400">
          Enter the OTP sent to your email.
        </p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 w-full rounded-2xl border border-white/10 bg-[#111827] px-5 py-4 text-white outline-none"
        />

        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="mb-6 w-full rounded-2xl border border-white/10 bg-[#111827] px-5 py-4 text-white outline-none"
        />

        <button
          onClick={handleVerify}
          disabled={loading}
          className="w-full rounded-2xl bg-cyan-400 py-4 font-semibold text-black"
        >
          {loading ? "Verifying..." : "Verify Email"}
        </button>
      </div>
    </div>
  );
}