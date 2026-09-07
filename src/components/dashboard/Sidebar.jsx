import {
  FaHome,
  FaComments,
  FaImage,
  FaCode,
  FaFileAlt,
  FaLanguage,
  FaMicrophone,
  FaChartBar,
  FaMagic,
  FaUser,
  FaCog,
} from "react-icons/fa";

import { NavLink, Link } from "react-router-dom";

const menu = [
  {
    title: "Dashboard",
    icon: <FaHome />,
    path: "/dashboard",
  },
  {
    title: "AI Chat",
    icon: <FaComments />,
    path: "/dashboard/chat",
  },
  {
    title: "Image Generator",
    icon: <FaImage />,
    path: "/dashboard/image-generator",
  },
  {
    title: "Code Generator",
    icon: <FaCode />,
    path: "/dashboard/code-generator",
  },
  {
    title: "Resume Builder",
    icon: <FaFileAlt />,
    path: "/dashboard/resume-builder",
  },
  {
    title: "Translator",
    icon: <FaLanguage />,
    path: "/dashboard/translator",
  },
  {
    title: "Speech To Text",
    icon: <FaMicrophone />,
    path: "/dashboard/speech-to-text",
  },
  {
    title: "Data Analyzer",
    icon: <FaChartBar />,
    path: "/dashboard/data-analyzer",
  },
  {
    title: "AI Assistant",
    icon: <FaMagic />,
    path: "/dashboard/assistant",
  },
  {
    title: "Profile",
    icon: <FaUser />,
    path: "/dashboard/profile",
  },
  {
    title: "Settings",
    icon: <FaCog />,
    path: "/dashboard/settings",
  },
];

export default function Sidebar() {
  return (
    <aside className="w-72 border-r border-white/10 bg-[#050816] p-6">
      <Link to="/" className="mb-10 block text-3xl font-bold">
        <span className="text-cyan-400">AI</span>
        Creator Hub
      </Link>

      <nav className="space-y-2">
        {menu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/dashboard"}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                isActive
                  ? "bg-cyan-500 text-white"
                  : "text-slate-400 hover:bg-white/10"
              }`
            }
          >
            {item.icon}
            {item.title}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
