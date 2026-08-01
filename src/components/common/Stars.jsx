export default function Stars() {
  const stars = Array.from({ length: 70 });

  return (
    <div className="fixed inset-0 -z-40 pointer-events-none">
      {stars.map((_, i) => (
        <span
          key={i}
          className="absolute h-[2px] w-[2px] rounded-full bg-white opacity-70 animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
}