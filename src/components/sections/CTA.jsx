 import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
export default function CTA() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-14 backdrop-blur-2xl">
          <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-[120px]" />
          <div className="relative text-center">
            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-cyan-300">
              Ready to Start?
            </span>
            <h2 className="mt-8 text-5xl font-black text-white">
              Build Smarter with AI
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Chat, generate images, summarize PDFs, build resumes,
              write code and much more from one intelligent platform.
            </p>
            <button className="group mt-12 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-violet-500 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(34,211,238,.4)]">
              Launch Workspace
              <ArrowRight
                size={22}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}