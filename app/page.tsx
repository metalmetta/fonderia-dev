import { HeroSection } from "@/components/hero-section";
import { TerminalDemo } from "@/components/terminal-demo";
import { FeaturesSection } from "@/components/features-section";
import { CTASection } from "@/components/cta-section";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <HeroSection />
      <TerminalDemo />
      <FeaturesSection />
      <CTASection />

      <footer className="border-t px-4 py-6 text-center text-xs text-muted-foreground sm:py-8 sm:text-sm">
        <p>© 2025 Fonderia. The home of Builders.</p>
      </footer>
    </main>
  );
}
