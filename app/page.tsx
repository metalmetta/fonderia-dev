"use client";

import { useState, useEffect } from "react";
import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { Footer } from "@/components/Footer";
import { AuthModal } from "@/components/AuthModal";
import { useFireConfetti } from "@/hooks/use-fire-confetti";

export default function HomePage() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { triggerFireConfetti } = useFireConfetti();

  useEffect(() => {
    // Check if we should trigger confetti after OAuth redirect
    const shouldShowConfetti = sessionStorage.getItem('pendingSignupConfetti');
    
    if (shouldShowConfetti === 'true') {
      // Clear the flag immediately
      sessionStorage.removeItem('pendingSignupConfetti');
      
      // Small delay to ensure page is fully loaded
      setTimeout(() => {
        triggerFireConfetti();
      }, 500);
    }
  }, [triggerFireConfetti]);

  return (
    <div className="min-h-screen">
      <Hero onForgeClick={() => setIsAuthModalOpen(true)} />
      <Manifesto />
      <Footer />
      <AuthModal open={isAuthModalOpen} onOpenChange={setIsAuthModalOpen} />
    </div>
  );
}

