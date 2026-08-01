import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import AICore from "./AICore";
export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-20 px-6 lg:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 backdrop-blur-xl">
            <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></div>
            <span className="text-sm font-medium text-cyan-300">
              Future of AI
            </span>
          </div>
          <h1 className="mt-8 text-5xl font-black leading-none text-white md:text-6xl lg:text-7xl">
            Create
            <br />
            Anything
            <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              With AI
            </span>
          </h1>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
            <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></div>
            <span className="text-cyan-300">
              <Typewriter
                words={[
                  "Generate Images",
                  "Write Code",
                  "Summarize PDFs",
                  "Build Resume",
                  "Study Smarter",
                  "Chat with AI",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={1800}
              />
            </span>
          </div>
          <p className="mt-10 max-w-lg text-lg leading-9 text-slate-300">
            One intelligent workspace to generate content,
            create AI images,
            build resumes,
            summarize PDFs,
            chat with AI,
            and write production-ready code.
          </p>
          <div className="mt-12 flex flex-wrap gap-5">
            <button className="rounded-2xl bg-gradient-to-r from-cyan-400 to-violet-500 px-8 py-4 text-lg font-semibold text-white transition duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(34,211,238,.45)]">
              Start Creating
            </button>
            <div className="flex items-center gap-8 text-slate-400">
              <div>
                <h2 className="text-2xl font-bold text-white">8+</h2>
                <p className="text-sm">AI Tools</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">24/7</h2>
                <p className="text-sm">Available</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: .8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center">
          <AICore />
        </motion.div>
      </div>
    </section>
  );
}