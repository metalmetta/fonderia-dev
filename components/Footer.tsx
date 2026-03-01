import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FooterProps {
  onForgeClick: () => void;
}

export const Footer = ({ onForgeClick }: FooterProps) => {
  return (
    <footer className="relative py-12 px-6 grain-overlay bg-charcoal border-t border-iron-light" role="contentinfo">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-8">

          <div className="flex flex-col items-center gap-3">
            <p className="text-ash text-sm">Ready to build?</p>
            <div className="relative inline-block">
              <div
                className="absolute -inset-3 rounded-md opacity-50 blur-lg animate-pulse"
                style={{
                  background: 'linear-gradient(135deg, hsl(24, 100%, 50%), hsl(38, 100%, 50%))'
                }}
              />
              <Button
                variant="forge"
                onClick={onForgeClick}
                className="relative"
              >
                Join the Forge
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-ash hover:text-ember-start hover:bg-iron-light transition-colors"
            >
              <a
                href="mailto:pietro.fantini1998@gmail.com,matteo@getfluida.com"
                className="flex items-center gap-2"
                aria-label="Email us"
              >
                <Mail className="w-4 h-4" />
                <span>Email Us</span>
              </a>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-ash hover:text-ember-start hover:bg-iron-light transition-colors"
            >
              <a
                href="https://www.linkedin.com/company/fonderiadev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fonderia on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </Button>
          </div>

          <div className="text-center text-sm text-ash-dark">
            <p>© {new Date().getFullYear()} Fonderia. Milan, Italy.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
