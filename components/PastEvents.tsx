const photos = [
  "/assets/1763424066595.jpeg",
  "/assets/1763424067586.jpeg",
  "/assets/1763424070469.jpeg",
  "/assets/1763424071489.jpeg",
];

export const PastEvents = () => {
  return (
    <section id="gallery" className="relative py-24 px-6 bg-charcoal border-t border-iron-light">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-12">Past Events</h2>

        <a
          href="https://luma.com/f0ly3t21"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-start justify-between gap-6 p-6 rounded-sm border border-iron-light bg-iron hover:border-ember-start transition-colors duration-200"
        >
          <div className="space-y-2">
            <p className="text-xs tracking-[0.2em] uppercase text-ash-dark">Buildathon · Milan</p>
            <p className="text-xl font-serif font-semibold group-hover:text-ember-start transition-colors duration-200">
              Fonderia Buildathon #1
            </p>
            <p className="text-ash text-sm leading-relaxed">
              The first gathering of the forge. Builders, makers, and founders converging in Milan to ship real things together.
            </p>
          </div>
          <span className="text-ash-dark group-hover:text-ember-start transition-colors duration-200 mt-1 shrink-0 text-lg">→</span>
        </a>

        <div className="grid grid-cols-2 gap-2 mt-6">
          {photos.map((src, i) => (
            <div key={i} className="aspect-video overflow-hidden rounded-sm bg-iron">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`Fonderia Buildathon #1 — photo ${i + 1}`}
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
