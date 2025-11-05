import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="relative py-8 px-6 grain-overlay bg-charcoal border-t border-iron-light" role="contentinfo">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="text-ash hover:text-ember-start hover:bg-iron-light transition-colors"
          >
            <a
              href="mailto:hello@fonderia.dev"
              className="flex items-center gap-2"
              aria-label="Email us"
            >
              <Mail className="w-4 h-4" />
              <span>Email Us</span>
            </a>
          </Button>

          <div className="text-center text-sm text-ash-dark">
            <p>© {new Date().getFullYear()} Fonderia. Milan, Italy.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
