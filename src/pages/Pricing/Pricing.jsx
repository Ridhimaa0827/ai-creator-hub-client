import { FaCheckCircle, FaTimesCircle, FaCrown } from "react-icons/fa";
export default function Pricing() {
  const handleUpgrade = () => {
    alert("🚀 Payment Gateway Coming Soon!");
  };
  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <section className="relative overflow-hidden px-6 pt-36 pb-20">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="text-6xl font-extrabold leading-tight">
            Choose the
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              {" "}Perfect Plan
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Start for free and upgrade anytime to unlock unlimited AI tools,
            faster responses and premium features.
          </p>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition hover:border-cyan-400 hover:scale-[1.02]">
          <h2 className="text-3xl font-bold">
            Free
          </h2>
          <p className="mt-4 text-6xl font-bold">
            ₹0
          </p>
          <p className="mt-2 text-slate-400">
            Perfect to explore AI Creator Hub.
          </p>
          <div className="mt-10 space-y-5">
            {[
              "50 AI Credits",
              "AI Chat",
              "Image Generator",
              "Code Generator",
              "Resume Builder",
              "Translator",
              "Data Analyzer",
              "Speech to Text"
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3"
              >
                <FaCheckCircle className="text-cyan-400" />
                {item}
              </div>
            ))}
          </div>
          <button
            className="mt-12 w-full rounded-2xl border border-cyan-400 py-4 text-lg font-semibold transition hover:bg-cyan-400 hover:text-black"
          >
            Current Plan
          </button>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-cyan-400 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 p-10 shadow-[0_0_80px_rgba(34,211,238,.15)] transition hover:scale-[1.02]">
          <div className="absolute right-6 top-6">
            <span className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-bold text-black">
              🔥 MOST POPULAR
            </span>
          </div>
          <FaCrown className="text-4xl text-yellow-400" />
          <h2 className="mt-5 text-3xl font-bold">
            Pro
          </h2>
          <p className="mt-4 text-6xl font-bold">
            ₹499
            <span className="text-xl font-normal text-slate-300">
              /month
            </span>
          </p>
          <p className="mt-2 text-slate-300">
            Unlimited AI with premium experience.
          </p>
          <div className="mt-10 space-y-5">
            {[
              "Unlimited Credits",
              "Unlimited AI Chat",
              "Unlimited Images",
              "Unlimited Code Generation",
              "Unlimited Resume Builder",
              "Unlimited Translator",
              "Unlimited Data Analysis",
              "Priority AI Responses",
              "Premium Support"
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3"
              >
                <FaCheckCircle className="text-cyan-400" />
                {item}
              </div>
            ))}
          </div>
          <button
            onClick={handleUpgrade}
            className="mt-12 w-full rounded-2xl bg-gradient-to-r from-cyan-400 to-violet-500 py-4 text-lg font-bold text-black transition hover:scale-[1.03]"
          >
            Upgrade to Pro 🚀
          </button>
        </div>
      </section>
      <section className="mx-auto mt-28 max-w-6xl px-6">
        <h2 className="mb-10 text-center text-4xl font-bold">
          Compare Plans
        </h2>
        <div className="overflow-hidden rounded-3xl border border-white/10">
          <table className="w-full">
            <thead className="bg-white/5">
              <tr>
                <th className="p-5 text-left">
                  Feature
                </th>
                <th>
                  Free
                </th>
                <th className="text-cyan-400">
                  Pro
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                "AI Chat",
                "Image Generator",
                "Code Generator",
                "Resume Builder",
                "Translator",
                "Data Analyzer",
                "Speech To Text",
                "Priority Responses",
                "Premium Support"
              ].map((feature, i) => (
                <tr
                  key={feature}
                  className={i % 2 === 0 ? "bg-white/5" : ""}
                >
                  <td className="p-5">
                    {feature}
                  </td>
                  <td className="text-center">
                    {i < 7
                      ? <FaCheckCircle className="mx-auto text-cyan-400" />
                      : <FaTimesCircle className="mx-auto text-red-400" />}
                  </td>
                  <td className="text-center">
                    <FaCheckCircle className="mx-auto text-cyan-400" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="mx-auto mt-28 max-w-5xl px-6">
        <h2 className="mb-10 text-center text-4xl font-bold">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {[
            ["Can I cancel anytime?", "Yes. You can cancel your subscription anytime."],
            ["Is payment secure?", "Yes. All payments are processed securely."],
            ["Can I upgrade later?", "Absolutely. Upgrade whenever you need."],
            ["Do credits expire?", "No. Pro users enjoy unlimited access."]
          ].map(([q, a]) => (
            <div
              key={q}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-xl font-semibold">
                {q}
              </h3>
              <p className="mt-2 text-slate-400">
                {a}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-24 text-center">
        <h2 className="text-5xl font-bold">
          Ready to build with AI?
        </h2>
        <p className="mt-5 text-slate-400">
          Join thousands of creators using AI Creator Hub.
        </p>
        <button
          onClick={handleUpgrade}
          className="mt-10 rounded-2xl bg-gradient-to-r from-cyan-400 to-violet-500 px-12 py-5 text-xl font-bold text-black transition hover:scale-105"
        >
          Upgrade to Pro 🚀
        </button>
      </section>
    </div>
  );
}