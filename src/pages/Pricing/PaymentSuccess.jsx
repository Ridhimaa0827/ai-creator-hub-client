import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { verifyStripePayment } from "../../api/paymentApi";

export default function PaymentSuccess() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [status, setStatus] = useState("verifying");

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        const sessionId = searchParams.get("session_id");
        const token = localStorage.getItem("token");

        if (!sessionId || !token) {
          setStatus("failed");
          return;
        }

        const res = await verifyStripePayment(sessionId, token);

        if (res.data.success) {
          localStorage.setItem(
            "user",
            JSON.stringify(res.data.user)
          );

          localStorage.setItem(
            "credits",
            res.data.user.credits
          );

          window.dispatchEvent(new Event("creditsUpdated"));

          setStatus("success");

          setTimeout(() => {
            navigate("/dashboard");
          }, 2000);
        }
      } catch (error) {
        console.error("Payment Verification Error:", error);
        setStatus("failed");
      }
    };

    verifyPayment();
  }, [searchParams, navigate]);

  if (status === "verifying") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#030712] text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Verifying Payment...
          </h1>

          <p className="mt-3 text-slate-400">
            Please wait while we confirm your payment.
          </p>
        </div>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#030712] text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-cyan-400">
            🎉 Payment Successful!
          </h1>

          <p className="mt-4 text-slate-400">
            Your account has been upgraded to Pro.
          </p>

          <p className="mt-2 text-slate-500">
            Redirecting to dashboard...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#030712] text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-400">
          Payment Verification Failed
        </h1>

        <p className="mt-4 text-slate-400">
          Something went wrong while verifying your payment.
        </p>

        <button
          onClick={() => navigate("/pricing")}
          className="mt-6 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-black"
        >
          Back to Pricing
        </button>
      </div>
    </div>
  );
}