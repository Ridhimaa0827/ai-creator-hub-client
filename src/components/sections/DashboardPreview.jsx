import { motion } from "framer-motion";
import {
  FaRobot,
  FaChartLine,
  FaImage,
  FaFilePdf,
  FaCode,
  FaCircle,
  FaBolt,
} from "react-icons/fa";
const stats = [
  {
    title: "Today's Requests",
    value: "156",
    icon: FaBolt,
    color: "text-cyan-300",
  },
  {
    title: "Images",
    value: "43",
    icon: FaImage,
    color: "text-pink-400",
  },
  {
    title: "PDFs",
    value: "28",
    icon: FaFilePdf,
    color: "text-orange-400",
  },
  {
    title: "Code",
    value: "91",
    icon: FaCode,
    color: "text-emerald-400",
  },
];
const activities = [
  "Resume Generated",
  "PDF Summarized",
  "Image Created",
  "React Code Generated",
];
export default function DashboardPreview() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mb-20 text-center"
        >
          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-cyan-300">
            Dashboard Preview
          </span>
          <h2 className="mt-6 text-5xl font-black text-white">
            Your AI Workspace
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Everything you create stays organized inside one intelligent dashboard.
          </p>
        </motion.div>
        <div className="grid gap-8 lg:grid-cols-[1.5fr_.8fr]">
          {/* CHAT WINDOW */}
          <motion.div
            whileHover={{ y: -5 }}
            className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
          >
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-cyan-400/15 p-3">
                  <FaRobot className="text-cyan-300 text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-white">
                    AI Assistant
                  </h3>
                  <p className="text-sm text-green-400">
                    ● Online
                  </p>
                </div>
              </div>
              <FaChartLine className="text-cyan-300 text-xl" />
            </div>
            <div className="space-y-5">
              <div className="max-w-md rounded-2xl bg-slate-800 p-4 text-slate-300">
                Generate a modern React portfolio website.
              </div>
              <div className="ml-auto max-w-md rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-500 p-4 text-white">
                Portfolio generated successfully with responsive layout and animations.
              </div>
              <div className="max-w-md rounded-2xl bg-slate-800 p-4 text-slate-300">
                Summarize my uploaded PDF.
              </div>
              <div className="ml-auto max-w-md rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-500 p-4 text-white">
                Summary completed in 8 bullet points.
              </div>
            </div>
          </motion.div>
          {/* RIGHT SIDE */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-5">
              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -6,
                    scale: 1.03,
                  }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                >
                  <item.icon className={`${item.color} text-3xl`} />
                  <h4 className="mt-5 text-3xl font-black text-white">
                    {item.value}
                  </h4>
                  <p className="mt-2 text-slate-400">
                    {item.title}
                  </p>
                </motion.div>
              ))}
            </div>
            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
            >
              <h3 className="mb-6 text-xl font-bold text-white">
                Recent Activity
              </h3>
              <div className="space-y-5">
                {activities.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4"
                  >
                    <FaCircle className="text-[8px] text-cyan-300" />
                    <span className="text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}