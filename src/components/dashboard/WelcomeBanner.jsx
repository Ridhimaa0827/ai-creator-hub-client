import { motion } from "framer-motion";

export default function WelcomeBanner({ user }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl bg-gradient-to-r from-cyan-900 via-slate-800 to-purple-900 p-10"
    >
      <h1 className="text-5xl font-bold text-white">
        Welcome back,
        <span className="text-cyan-400">
          {" "}
          {user.name}
        </span>{" "}
        👋
      </h1>

      <p className="mt-5 max-w-3xl text-lg text-slate-300">
        Your AI workspace is ready. Generate images,
        write code, chat with AI and boost your
        productivity from one dashboard.
      </p>

      <button className="mt-8 rounded-xl bg-cyan-400 px-7 py-4 font-bold text-black transition hover:scale-105">
        Start Creating →
      </button>
    </motion.section>
  );
}