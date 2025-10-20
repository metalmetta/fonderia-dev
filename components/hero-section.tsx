"use client";

import { RetroGrid } from "@/components/ui/retro-grid";
import { motion } from "motion/react";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20">
      <RetroGrid
        className="opacity-50"
        angle={65}
        cellSize={50}
        darkLineColor="#525252"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 flex flex-col items-center space-y-6 text-center sm:space-y-8"
      >
        <pre className="font-mono text-[6px] leading-none text-primary xs:text-[8px] sm:text-xs md:text-sm lg:text-base overflow-x-auto max-w-full">
{`███████╗ ██████╗ ███╗   ██╗██████╗ ███████╗██████╗ ██╗ █████╗
██╔════╝██╔═══██╗████╗  ██║██╔══██╗██╔════╝██╔══██╗██║██╔══██╗
█████╗  ██║   ██║██╔██╗ ██║██║  ██║█████╗  ██████╔╝██║███████║
██╔══╝  ██║   ██║██║╚██╗██║██║  ██║██╔══╝  ██╔══██╗██║██╔══██║
██║     ╚██████╔╝██║ ╚████║██████╔╝███████╗██║  ██║██║██║  ██║
╚═╝      ╚═════╝ ╚═╝  ╚═══╝╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝╚═╝  ╚═╝`}
        </pre>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="space-y-3 px-4 sm:space-y-4"
        >
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
            The Home of Builders
          </h1>
          <p className="mx-auto max-w-[600px] text-sm text-muted-foreground sm:text-base md:text-lg px-2">
            Our virtual campus in Milan is where future-defining companies take shape. We're the first support line for founders solving hard problems in emerging domains.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <div className="text-sm text-accent">
            ↓ Scroll to explore
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
