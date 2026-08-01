import { motion } from "framer-motion";
export default function ToolCard({ title, description, Icon, color }) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_0_40px_rgba(34,211,238,.18)]">
      <div
        className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${color}`}/>
      <div className="mb-6 inline-flex rounded-2xl bg-white/5 p-4 transition-all duration-300 group-hover:scale-110">
        <Icon className="text-4xl text-cyan-300" />
      </div>
      <h3 className="text-2xl font-bold text-white">{title}</h3>
      <p className="mt-3 leading-7 text-slate-400">{description}</p>
    </motion.div>
  );
}
