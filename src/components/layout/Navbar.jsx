import { useNavigate, Link } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto mt-5 flex h-20 w-[92%] max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 backdrop-blur-xl">
        <h1
          onClick={() => navigate("/")}
          className="cursor-pointer text-xl font-bold tracking-wide text-white"
        >
          AI Creator Hub
        </h1>

        <nav className="hidden gap-8 text-sm text-gray-300 md:flex">
          <a href="#">Features</a>
          <a href="#">Tools</a>
          <a href="/pricing">Pricing</a>
          <a href="#">About</a>
        </nav>

        <Link
          to="/login"
          className="rounded-xl bg-cyan-400 px-5 py-2 font-medium text-black"
        >
          Login
        </Link>
      </div>
    </header>
  );
}
