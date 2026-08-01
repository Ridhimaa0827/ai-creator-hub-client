import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#050816]">      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />
      <motion.div
        animate={{
          x: [-50, 40, -50],
          y: [-30, 30, -30],
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "easeInOut",
        }}
        className="absolute -left-52 top-0 h-[700px] w-[700px] rounded-full bg-cyan-400/20 blur-[170px]"
      />
      <motion.div
        animate={{
          x: [30, -40, 30],
          y: [20, -30, 20],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "easeInOut",
        }}
        className="absolute -right-48 top-32 h-[650px] w-[650px] rounded-full bg-violet-600/20 blur-[170px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
        }}
        className="absolute bottom-[-350px] left-1/2 h-[750px] w-[750px] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[180px]"
      />
    </div>
  );
}