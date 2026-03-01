export const UpcomingEvents = () => {
  return (
    <section id="events" className="relative py-24 px-6 bg-charcoal border-t border-iron-light">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-12">Upcoming Events</h2>

        <a
          href="https://luma.com/hkqucrra"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-start justify-between gap-6 p-6 rounded-sm border bg-iron transition-colors duration-200"
          style={{ borderColor: "hsl(24, 100%, 50%)" }}
        >
          <div className="space-y-2">
            <p className="text-xs tracking-[0.2em] uppercase text-ash-dark">Buildathon · OGR Turin</p>
            <p className="text-xl font-serif font-semibold group-hover:text-ember-start transition-colors duration-200">
              Fonderia Buildathon #2
            </p>
            <p className="text-ash text-sm leading-relaxed">
              The forge moves to Turin. A full day of building at OGR — one of Europe's most ambitious innovation spaces.
            </p>
            <p
              className="text-xs font-medium mt-3 tracking-wide"
              style={{ color: "hsl(24, 100%, 50%)" }}
            >
              28 March 2025
            </p>
          </div>
          <span
            className="transition-colors duration-200 mt-1 shrink-0 text-lg"
            style={{ color: "hsl(24, 100%, 50%)" }}
          >
            →
          </span>
        </a>
      </div>
    </section>
  );
};
