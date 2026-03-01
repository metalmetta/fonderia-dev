const sponsors = [
  "OGR",
  "DevPunks",
  "Textyess",
  "Xolo",
  "Alpic",
  "Manufact",
  "Fractal",
  "UnderDogs",
];

export const Sponsors = () => {
  return (
    <section className="relative py-16 px-6 bg-charcoal border-t border-iron-light">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-ash-dark mb-8">Supported by</p>
        <div className="flex flex-wrap gap-x-8 gap-y-4">
          {sponsors.map((name) => (
            <span key={name} className="text-ash font-medium text-sm tracking-wide">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
