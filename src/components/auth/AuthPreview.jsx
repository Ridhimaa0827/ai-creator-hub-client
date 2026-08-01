import { motion } from "framer-motion";
import {
  FaComments,
  FaImage,
  FaCode,
  FaFileAlt,
  FaArrowRight,
} from "react-icons/fa";

const features = [
  {
    icon: <FaComments />,
    title: "AI Chat",
    text: "Ask anything instantly",
  },
  {
    icon: <FaImage />,
    title: "Image Generator",
    text: "Create AI artwork",
  },
  {
    icon: <FaCode />,
    title: "Code Generator",
    text: "Generate production code",
  },
  {
    icon: <FaFileAlt />,
    title: "Resume Builder",
    text: "ATS Friendly Resume",
  },
];

export default function AuthPreview() {
  return (
    <div className="flex h-full flex-col justify-between">

      {/* Heading */}

      <div>
        <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
          ✨ AI Creator Hub
        </span>

        <h1 className="mt-6 text-4xl font-black leading-tight text-white">
          Your Personal
          <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
            AI Workspace
          </span>
        </h1>

        <p className="mt-4 max-w-md text-slate-400 leading-7">
          Chat, generate images, build resumes, write code and boost your
          productivity with powerful AI tools.
        </p>
      </div>

      {/* Cards */}

      <div className="mt-10 space-y-4">

        {features.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.03,
              x: 8,
            }}
            transition={{
              duration: .25,
            }}
            className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
          >
            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300 text-lg">
                {item.icon}
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-400">
                  {item.text}
                </p>
              </div>

            </div>

            <FaArrowRight className="text-cyan-300" />

          </motion.div>
        ))}

      </div>

      {/* Bottom */}

      <div className="mt-8 flex items-center justify-between rounded-2xl border border-cyan-400/20 bg-cyan-400/5 px-6 py-5">

        <div>
          <h2 className="text-3xl font-bold text-white">
            9+
          </h2>

          <p className="text-sm text-slate-400">
            AI Tools
          </p>
        </div>

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          className="relative flex h-24 w-24 items-center justify-center"
        >

          <div className="absolute h-24 w-24 rounded-full border border-cyan-400/20" />

          <div className="absolute h-16 w-16 rounded-full border border-violet-500/20" />

          <div className="h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_30px_#22d3ee]" />

        </motion.div>

      </div>

    </div>
  );
}