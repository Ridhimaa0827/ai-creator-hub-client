import { motion } from "framer-motion";
import FloatingTools from "./FloatingTools";
import {
  FaRobot,
  FaCode,
  FaImage,
  FaFileAlt,
  FaComments,
  FaGraduationCap,
} from "react-icons/fa";

const items = [
  { Icon: FaRobot, top: "4%", left: "50%" },
  { Icon: FaImage, top: "24%", left: "8%" },
  { Icon: FaCode, top: "24%", right: "8%" },
  { Icon: FaFileAlt, bottom: "20%", left: "12%" },
  { Icon: FaGraduationCap, bottom: "20%", right: "12%" },
  { Icon: FaComments, bottom: "3%", left: "50%" },
];

export default function AICore() {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative h-[500px] w-[500px]">
    
      <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-[120px]" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-10 rounded-full border border-cyan-400/20" />    
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-20 rounded-full border border-violet-500/20" />     
      <div className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-3xl">
        <div className="absolute h-24 w-24 rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 blur-2xl opacity-70" />
        <div className="relative h-8 w-8 rounded-full bg-white shadow-[0_0_40px_#22d3ee]" />
      </div>
      {items.map(({ Icon, ...style }, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
          }}
          style={style}
          className="absolute -translate-x-1/2 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-300 backdrop-blur-xl">   
          <Icon size={22} />
        </motion.div>
      ))}
    </motion.div>
  );
}