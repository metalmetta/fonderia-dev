"use client";

import { LoginDialog } from "@/components/login-dialog";
import { motion } from "motion/react";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 right-0 z-50 p-3 sm:p-4 md:p-6"
    >
      <LoginDialog />
    </motion.header>
  );
}
