import { motion } from "framer-motion";
import {
  FaImage,
  FaComments,
  FaCode,
  FaFilePdf,
  FaGraduationCap,
  FaFileAlt,
} from "react-icons/fa";

const cards = [
  {
    title: "Image AI",
    Icon: FaImage,
    top: "12%",
    left: "-8%",
  },
  {
    title: "AI Chat",
    Icon: FaComments,
    top: "12%",
    right: "-8%",
  },
  {
    title: "PDF AI",
    Icon: FaFilePdf,
    bottom: "18%",
    left: "-10%",
  },
  {
    title: "Code AI",
    Icon: FaCode,
    bottom: "18%",
    right: "-10%",
  },
  {
    title: "Study AI",
    Icon: FaGraduationCap,
    bottom: "-2%",
    left: "18%",
  },
  {
    title: "Resume AI",
    Icon: FaFileAlt,
    bottom: "-2%",
    right: "18%",
  },
];

export default function FloatingTools() {
  return (
    <>
      {cards.map(({ Icon, title, ...style }, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={style}
          className="absolute"
        >
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl shadow-[0_0_35px_rgba(0,229,255,.12)]">

            <Icon className="text-cyan-300 text-lg" />

            <span className="text-white text-sm font-medium">

              {title}

            </span>

          </div>
        </motion.div>
      ))}
    </>
  );
}