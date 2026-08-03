import { FaRocket, FaShieldAlt, FaBrain } from "react-icons/fa";

export default function About() {
  const cards = [
    {
      icon: <FaBrain className="text-3xl text-cyan-400" />,
      title: "Multiple AI Tools",
      desc: "Access Chat, Image Generator, Resume Builder, Translator, Code Generator, Data Analyzer and more from one dashboard.",
    },
    {
      icon: <FaRocket className="text-3xl text-violet-400" />,
      title: "Fast & Productive",
      desc: "Complete hours of work in minutes using AI powered workflows designed for students, developers and creators.",
    },
    {
      icon: <FaShieldAlt className="text-3xl text-green-400" />,
      title: "Secure Platform",
      desc: "Your account is protected using JWT authentication, email verification and secure backend APIs.",
    },
  ];

  return (
    <section
      id="about"
      className="mx-auto mt-28 max-w-7xl px-6"
    >
      <div className="text-center">

        <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-cyan-400">
          About AI Creator Hub
        </span>

        <h2 className="mt-6 text-5xl font-bold text-white">
          Everything You Need.
          <br />
          One AI Platform.
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          AI Creator Hub combines the most useful AI tools into one
          beautiful workspace. Whether you need to write code,
          generate images, analyze data, translate languages or build
          resumes, everything is available from one dashboard.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">

        {cards.map((card, index) => (
          <div
            key={index}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg transition hover:-translate-y-2 hover:border-cyan-400/40"
          >
            {card.icon}

            <h3 className="mt-5 text-2xl font-semibold text-white">
              {card.title}
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              {card.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}