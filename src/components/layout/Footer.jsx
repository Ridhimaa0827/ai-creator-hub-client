import { FaGithub, FaLinkedin, FaRobot, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-[#050816]/80 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 p-3">
              <FaRobot className="text-xl text-white" />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">AI Creator Hub</h2>

              <p className="text-sm text-cyan-300">
                One Platform. Unlimited Intelligence.
              </p>
            </div>
          </div>

          <p className="mt-6 max-w-sm leading-7 text-slate-400">
            Create images, chat with AI, summarize PDFs, generate code, build
            resumes and boost productivity from one intelligent workspace.
          </p>
        </div>
        <div>
          <h3 className="mb-6 text-xl font-semibold text-white">Quick Links</h3>

          <ul className="space-y-4 text-slate-400">
            <li className="transition hover:text-cyan-300 cursor-pointer">
              AI Chat
            </li>

            <li className="transition hover:text-cyan-300 cursor-pointer">
              Image Generator
            </li>

            <li className="transition hover:text-cyan-300 cursor-pointer">
              Resume Builder
            </li>

            <li className="transition hover:text-cyan-300 cursor-pointer">
              Code Generator
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-6 text-xl font-semibold text-white">Developer</h3>

          <p className="text-lg font-semibold text-white">Ridhima Sharma</p>

          <p className="mt-2 text-slate-400">
            MCA Student • Full Stack Developer
          </p>

          <div className="mt-8 flex gap-5">
            <a
              href="https://github.com/Ridhimaa0827/ai-creator-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xl text-slate-300 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-300">
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/ridhima-sharma27/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xl text-slate-300 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-300">
              <FaLinkedin />
            </a>
            <a
              href="mailto:ridhimasharma21150@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xl text-slate-300 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-300">
              <FaEnvelope />
            </a>
            
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-slate-500 md:flex-row">
          <p>© 2026 AI Creator Hub. All rights reserved.</p>

          <p>Built with React • Node.js • MongoDB • Gemini AI</p>
        </div>
      </div>
    </footer>
  );
}
