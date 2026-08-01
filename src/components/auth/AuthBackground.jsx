import { motion } from "framer-motion";
export default function AuthBackground() {
  return (
    <>
      <div className="fixed inset-0 -z-50 overflow-hidden bg-[#030712]">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />
        <div className="absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-violet-500/10 blur-[150px]" />
        <div className="absolute bottom-0 left-0 h-[450px] w-[450px] rounded-full bg-fuchsia-500/10 blur-[150px]" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.18) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.18) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
            transform: "perspective(1200px) rotateX(75deg) scale(2)",
            transformOrigin: "top",
          }}/>
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-cyan-300"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + Math.random() * 300,
              opacity: 0,
            }}
            animate={{
              y: -200,
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 12 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,rgba(0,0,0,.45))]" />
      </div>
    </>
  );
}