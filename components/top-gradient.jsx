export const TopGradient = () => {
  return (
    <div
      className="pointer-events-none absolute -top-9 h-16 w-screen opacity-50 blur-2xl"
      style={{
        zIndex: "100",
        background:
          "radial-gradient(circle,#f86bdf 0,rgba(107,107,248,.8) 100%)",
      }}
    />
  );
};
