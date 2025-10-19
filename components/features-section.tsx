"use client";

import { motion } from "motion/react";
import { Hammer, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: Hammer,
    title: "Built to Last",
    description:
      "Rock-solid infrastructure designed for reliability and performance at scale.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Optimized deployment pipelines that get your code live in seconds, not minutes.",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description:
      "Enterprise-grade security with automated updates and best-practice configurations.",
  },
];

export function FeaturesSection() {
  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Crafted for the brave ones
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Everything you need to build, deploy, and scale your applications
            with confidence.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-lg border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
