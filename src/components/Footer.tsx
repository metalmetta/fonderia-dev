import { Linkedin, X } from "lucide-react";

export const Footer = () => {
  const founders = [
    {
      name: "Pietro Fantini",
      linkedin: "https://www.linkedin.com/in/pietrofantini/",
      twitter: "https://x.com/pietrofantini4",
    },
    {
      name: "Matteo Mariani",
      linkedin: "https://www.linkedin.com/in/matteomariani123/",
      twitter: "https://x.com/metalmetta",
    },
  ];

  return (
    <footer className="relative py-16 px-6 grain-overlay border-t border-iron-light" role="contentinfo">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center md:items-start">
          {founders.map((founder) => (
            <div key={founder.name} className="text-center md:text-left">
              <p className="font-medium mb-3">{founder.name}</p>
              <div className="flex gap-4 justify-center md:justify-start">
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ash hover:text-ember-start transition-colors"
                  aria-label={`${founder.name} on LinkedIn`}
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={founder.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ash hover:text-ember-start transition-colors"
                  aria-label={`${founder.name} on X (Twitter)`}
                >
                  <X className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-ash-dark">
          <p>© {new Date().getFullYear()} Fonderia. Milan, Italy.</p>
        </div>
      </div>
    </footer>
  );
};
