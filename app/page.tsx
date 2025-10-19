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

      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        <p>© 2025 Fonderia. The home of Builders.</p>
      </footer>
    </main>
  );
}
