import { motion } from "framer-motion";
import {
  FaComments,
  FaImage,
  FaCode,
  FaFilePdf,
  FaFileAlt,
  FaGraduationCap,
  FaChartLine,
  FaPenNib,
  FaRobot,
} from "react-icons/fa";
import ToolCard from "../ui/ToolCard.jsx";
const tools = [
  {
    title: "AI Chat",
    description: "Ask anything and get intelligent answers instantly.",
    Icon: FaComments,
    color: "from-cyan-400 to-blue-500",
  },
  {
    title: "Image Generator",
    description: "Generate stunning AI artwork from simple prompts.",
    Icon: FaImage,
    color: "from-pink-500 to-violet-500",
  },
  {
    title: "Code Generator",
    description: "Generate clean and production-ready code in seconds.",
    Icon: FaCode,
    color: "from-emerald-400 to-cyan-500",
  },
  {
    title: "PDF Summarizer",
    description: "Upload PDFs and receive concise summaries instantly.",
    Icon: FaFilePdf,
    color: "from-orange-400 to-red-500",
  },
  {
    title: "Resume Builder",
    description: "Create modern ATS-friendly resumes with AI.",
    Icon: FaFileAlt,
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Study Assistant",
    description: "Learn faster with AI-powered explanations and notes.",
    Icon: FaGraduationCap,
    color: "from-cyan-500 to-violet-500",
  },
  {
    title: "Content Generator",
    description: "Blogs, emails, captions, Linkedln posts, product copy -- tuned per platform.",
    Icon: FaPenNib,
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Usage Analytics",
    description: "Track your AI usage, tokens, activity history and productivity.",
    Icon: FaChartLine,
    color: "from-green-400 to-emerald-500",
  },
  {
    title: "AI Assistant",
    description: "Your personal AI companion for everyday work and productivity.",
    Icon: FaRobot,
    color: "from-indigo-500 to-cyan-500",
  },
  
];
export default function ToolsSection() {
  return (
    <section id="tools" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm text-cyan-300">
            AI Workspace
          </span>
          <h2 className="mt-6 text-5xl font-black text-white">
            Everything You Need
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Access all powerful AI tools from one beautiful workspace.
          </p>
        </motion.div>
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {tools.map((tool, index) => (
            <ToolCard key={index} {...tool} />
          ))}
        </div>
      </div>
    </section>
  );
}
