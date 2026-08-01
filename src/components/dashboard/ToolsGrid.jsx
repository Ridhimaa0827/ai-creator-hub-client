import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaComments,
  FaImage,
  FaCode,
  FaFileAlt,
  FaLanguage,
  FaMicrophone,
  FaChartBar,
  FaMagic,
} from "react-icons/fa";

const tools = [
  {
    title: "AI Chat",
    path: "/dashboard/chat",
    icon: <FaComments />,
    color: "text-cyan-400",
    desc: "Ask anything instantly",
  },
  {
    title: "Image Generator",
    path: "/dashboard/image-generator",
    icon: <FaImage />,
    color: "text-pink-400",
    desc: "Create AI images",
  },
  {
    title: "Code Generator",
    path: "/dashboard/code-generator",
    icon: <FaCode />,
    color: "text-green-400",
    desc: "Generate clean code",
  },
  {
    title: "Resume Builder",
    path: "/dashboard/resume-builder",
    icon: <FaFileAlt />,
    color: "text-yellow-400",
    desc: "Create ATS resume",
  },
  {
    title: "Translator",
    path: "/dashboard/translator",
    icon: <FaLanguage />,
    color: "text-orange-400",
    desc: "Translate languages",
  },
  {
    title: "Speech to Text",
    path: "/dashboard/speech-to-text",
    icon: <FaMicrophone />,
    color: "text-red-400",
    desc: "Convert voice to text",
  },
  {
    title: "Data Analyzer",
    path: "/dashboard/data-analyzer",
    icon: <FaChartBar />,
    color: "text-blue-400",
    desc: "Analyze files",
  },
  {
    title: "AI Assistant",
    path: "/dashboard/assistant",
    icon: <FaMagic />,
    color: "text-violet-400",
    desc: "Your personal AI",
  },
];

export default function ToolsGrid() {
  const navigate = useNavigate();

  return (
    <>
      <h2 className="mb-6 mt-12 text-3xl font-bold text-white">
        AI Tools
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {tools.map((tool, index) => (
          <motion.div
  key={tool.title}
  whileHover={{ y: -8, scale: 1.03 }}
  onClick={() => navigate(tool.path)}
  className="cursor-pointer rounded-3xl border border-white/5 bg-white/5 p-6"
>
            <div
              className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-2xl ${tool.color}`}
            >
              {tool.icon}
            </div>

            <h3 className="text-xl font-bold text-white">
              {tool.title}
            </h3>

            <p className="mt-2 text-slate-400">
              {tool.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
}