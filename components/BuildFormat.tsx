import { Flame, Hammer, Presentation } from "lucide-react";

const steps = [
  {
    icon: Flame,
    title: "Show up",
    description: "No pitch decks, no prerequisites. Come with an idea or find one here. The only requirement is that you build.",
  },
  {
    icon: Hammer,
    title: "Build for a day",
    description: "Hours of focused work and real collaboration. No panels, no filler. Just people making things together.",
  },
  {
    icon: Presentation,
    title: "Ship it",
    description: "Every buildathon ends with demos. If it exists, show it. If it doesn't exist yet, it will.",
  },
];

export const BuildFormat = () => {
  return (
    <section id="format" className="relative py-24 px-6 bg-charcoal border-t border-iron-light">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">What happens</h2>
        <p className="text-ash mb-12">A buildathon is simple by design.</p>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, description }) => (
            <div key={title} className="space-y-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-sm bg-iron border border-iron-light">
                <Icon className="w-5 h-5 text-ember-start" />
              </div>
              <h3 className="text-lg font-serif font-semibold">{title}</h3>
              <p className="text-ash text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
