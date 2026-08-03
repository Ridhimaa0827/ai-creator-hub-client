import { motion } from "framer-motion";
import {
  FaBolt,
  FaLock,
  FaCloud,
  FaPalette,
} from "react-icons/fa";
const features = [
  {
    icon: FaBolt,
    title: "Lightning Fast",
    text: "Generate AI responses within seconds.",
  },
  {
    icon: FaLock,
    title: "Secure",
    text: "Your chats and data stay protected.",
  },
  {
    icon: FaCloud,
    title: "Cloud Based",
    text: "Access your workspace from anywhere.",
  },
  {
    icon: FaPalette,
    title: "Modern Experience",
    text: "Premium UI built for productivity.",
  },
];
export default function Features() {
  return (
    <section id="features" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-cyan-300">
            Why Choose Us
          </span>
          <h2 className="mt-6 text-5xl font-black text-white">
            Built for the Future
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            A single platform that combines multiple AI tools with a premium experience.
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <item.icon className="mb-6 text-5xl text-cyan-300" />
              <h3 className="text-2xl font-bold text-white">
                {item.title}
              </h3>
              <p className="mt-4 leading-7 text-slate-400">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}