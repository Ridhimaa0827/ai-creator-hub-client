import { motion } from "framer-motion";
import AuthPreview from "./AuthPreview";

export default function AuthLayout({
  children,
  title,
  subtitle,
}) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-10">

      <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-2">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex min-h-[700px] rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
        >
          <AuthPreview />
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex min-h-[700px] items-center rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl shadow-[0_0_60px_rgba(34,211,238,.08)]"
        >
          <div className="mx-auto w-full max-w-md">

            <h2 className="text-4xl font-bold text-white">
              {title}
            </h2>

            <p className="mt-3 text-slate-400">
              {subtitle}
            </p>

            <div className="mt-8">
              {children}
            </div>

          </div>
        </motion.div>

      </div>

    </section>
  );
}
