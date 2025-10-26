import { useState } from "react";
import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { Footer } from "@/components/Footer";
import { AuthModal } from "@/components/AuthModal";

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Hero onForgeClick={() => setIsAuthModalOpen(true)} />
      <Manifesto />
      <Footer />
      <AuthModal open={isAuthModalOpen} onOpenChange={setIsAuthModalOpen} />
    </div>
  );
};

export default Index;
