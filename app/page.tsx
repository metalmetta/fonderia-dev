"use client";

import { useState, useEffect } from "react";
import { Banner } from "@/components/Banner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { BuildFormat } from "@/components/BuildFormat";
import { UpcomingEvents } from "@/components/UpcomingEvents";
import { PastEvents } from "@/components/PastEvents";
import { Sponsors } from "@/components/Sponsors";
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
    <div className="min-h-screen pt-20">
      <Banner />
      <Navbar onForgeClick={() => setIsAuthModalOpen(true)} />
      <Hero onForgeClick={() => setIsAuthModalOpen(true)} />
      <Manifesto />
      <BuildFormat />
      <UpcomingEvents />
      <PastEvents />
      <Sponsors />
      <Footer onForgeClick={() => setIsAuthModalOpen(true)} />
      <AuthModal open={isAuthModalOpen} onOpenChange={setIsAuthModalOpen} />
    </div>
  );
}

