import {
  FaCoins,
  FaRobot,
  FaCrown,
} from "react-icons/fa";

export default function StatsCards({ user }) {

  const credits =
    Number(localStorage.getItem("credits")) || user.credits;

  const cards = [
    {
      title: "Credits",
      value: credits,
      icon: <FaCoins />,
      color: "text-yellow-400",
    },
    {
      title: "Current Plan",
      value: user.plan,
      icon: <FaCrown />,
      color: "text-violet-400",
    },
    {
      title: "AI Tools",
      value: "9+",
      icon: <FaRobot />,
      color: "text-cyan-400",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-3xl border border-white/10 bg-white/5 p-8"
        >
          <div
            className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 text-3xl ${card.color}`}
          >
            {card.icon}
          </div>

          <p className="text-slate-400">
            {card.title}
          </p>

          <h2 className="mt-3 text-5xl font-bold">
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}