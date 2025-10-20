"use client";

import { LoginDialog } from "@/components/login-dialog";
import { motion } from "motion/react";
import Link from "next/link";
import { Calendar } from "lucide-react";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b bg-background/80 backdrop-blur-sm px-4 py-3 sm:px-6 md:px-8"
    >
      <Link href="/" className="text-lg font-bold tracking-tight sm:text-xl">
        Fonderia
      </Link>

      <nav className="flex items-center gap-3 sm:gap-6">
        <Link
          href="/events"
          className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:gap-2 sm:text-base"
        >
          <Calendar className="h-4 w-4" />
          <span className="hidden sm:inline">Events</span>
        </Link>
        <LoginDialog />
      </nav>
    </motion.header>
  );
}
