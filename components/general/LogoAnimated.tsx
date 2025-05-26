const LogoAnimated = () => {
  const letters = "BROKACARS".split("");

  return (
    <div className="w-[120px] h-[60px] flex items-center justify-center overflow-hidden">
      <div className="flex gap-[1px]">
        {letters.map((letter, i) => (
          <span
            key={i}
            className="text-blue-800 text-[28px] font-bold tracking-wide opacity-0 animate-fade-in-slide"
            style={{
              animationDelay: `${i * 0.01}s`,
              animationFillMode: "forwards",
            }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LogoAnimated;
