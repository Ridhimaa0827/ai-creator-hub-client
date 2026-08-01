import { FaCheckCircle } from "react-icons/fa";
export default function Pricing() {
  return (
    <div className="min-h-screen bg-[#030712] px-6 py-20 text-white">
      <h1 className="mb-4 text-center text-5xl font-bold">
        Choose Your Plan
      </h1>
      <p className="mb-16 text-center text-slate-400">
        Start for free or unlock unlimited AI tools.
      </p>
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-4 text-3xl font-bold">
            Free
          </h2>
          <h3 className="mb-8 text-5xl font-bold">
            ₹0
          </h3>
          <div className="space-y-4">
            <p className="flex items-center gap-3">
              <FaCheckCircle className="text-cyan-400"/>
              50 AI Credits
            </p>
            <p className="flex items-center gap-3">
              <FaCheckCircle className="text-cyan-400"/>
              AI Chat
            </p>
            <p className="flex items-center gap-3">
              <FaCheckCircle className="text-cyan-400"/>
              Image Generator
            </p>
            <p className="flex items-center gap-3">
              <FaCheckCircle className="text-cyan-400"/>
              Resume Builder
            </p>
          </div>
          <button className="mt-10 w-full rounded-xl border border-cyan-400 py-3">
            Current Plan
          </button>
        </div>
        <div className="rounded-3xl border border-cyan-400 bg-cyan-500/10 p-8">
          <span className="rounded-full bg-cyan-400 px-4 py-1 text-sm font-semibold text-black">
            MOST POPULAR
          </span>
          <h2 className="mt-4 mb-4 text-3xl font-bold">
            Pro
          </h2>
          <h3 className="mb-8 text-5xl font-bold">
            ₹499
            <span className="text-lg font-normal text-slate-400">
              /month
            </span>
          </h3>
          <div className="space-y-4">
            <p className="flex items-center gap-3">
              <FaCheckCircle className="text-cyan-400"/>
              Unlimited Credits
            </p>
            <p className="flex items-center gap-3">
              <FaCheckCircle className="text-cyan-400"/>
              Unlimited AI Chat
            </p>
            <p className="flex items-center gap-3">
              <FaCheckCircle className="text-cyan-400"/>
              Unlimited Images
            </p>
            <p className="flex items-center gap-3">
              <FaCheckCircle className="text-cyan-400"/>
              Faster AI
            </p>
            <p className="flex items-center gap-3">
              <FaCheckCircle className="text-cyan-400"/>
              Premium Support
            </p>
          </div>
          <button
            className="mt-10 w-full rounded-xl bg-cyan-400 py-3 font-bold text-black transition hover:scale-105"
          >
            Upgrade Now
          </button>
        </div>
      </div>
    </div>
  );
}