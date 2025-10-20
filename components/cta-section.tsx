"use client";

import { motion } from "motion/react";
import { LoginDialog } from "@/components/login-dialog";

export function CTASection() {
  return (
    <section className="px-4 py-16 sm:py-20 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 p-6 text-center sm:p-8 md:p-12"
      >
        <h2 className="mb-3 text-2xl font-bold tracking-tight sm:mb-4 sm:text-3xl md:text-4xl">
          Want to build with us?
        </h2>
        <p className="mb-6 px-2 text-sm text-muted-foreground sm:mb-8 sm:text-base md:text-lg">
          Tell us what you're building for an opportunity to be invited to campus and access to our community of top founders. We'll get back to you within 2 weeks.
        </p>
        <LoginDialog />
      </motion.div>
    </section>
  );
}
