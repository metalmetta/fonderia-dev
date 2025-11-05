import { Button } from "@/components/ui/button";

interface HeroProps {
  onForgeClick: () => void;
}

export const Hero = ({ onForgeClick }: HeroProps) => {
  return (
    <section 
      className="relative min-h-screen flex flex-col items-center justify-center grain-overlay overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background images - layered */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(/assets/forge-hero.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.4,
          }}
          aria-label="Sparks rising from a forge"
        />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(/assets/forge-workshop.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3,
          }}
          aria-label="Blacksmiths working in a forge"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-iron focus:text-foreground">
          Skip to content
        </a>
        
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-serif font-bold tracking-tight mb-4 animate-fade-in">
          FONDERIA
        </h1>
        
        <p className="text-xl md:text-2xl text-ash mb-12 font-light tracking-wide">
          Milan's forge for builders.
        </p>

        <div className="relative inline-block">
          <div 
            className="absolute -inset-4 rounded-md opacity-75 blur-xl animate-pulse"
            style={{
              background: 'linear-gradient(135deg, hsl(24, 100%, 50%), hsl(38, 100%, 50%))'
            }}
          />
          <Button 
            variant="forge" 
            size="lg"
            onClick={onForgeClick}
            className="relative text-lg px-12 py-6 h-auto"
            aria-label="Join the forge - Open sign up"
          >
            Forge
          </Button>
        </div>
      </div>
    </section>
  );
};
