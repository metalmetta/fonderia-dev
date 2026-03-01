export const Banner = () => {
  return (
    <a
      href="https://luma.com/hkqucrra"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-charcoal transition-opacity hover:opacity-90"
      style={{ background: "linear-gradient(135deg, hsl(24, 100%, 50%), hsl(38, 100%, 50%))" }}
    >
      <span className="font-semibold tracking-wide">Buildathon @ OGR Turin</span>
      <span className="opacity-70">·</span>
      <span>28 March</span>
      <span className="ml-1 opacity-80">→</span>
    </a>
  );
};
