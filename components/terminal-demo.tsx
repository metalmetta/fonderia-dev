"use client";

import { Terminal, TypingAnimation, AnimatedSpan } from "@/components/ui/terminal";

export function TerminalDemo() {
  return (
    <section className="flex min-h-screen items-center justify-center px-4 py-16">
      <div className="w-full max-w-2xl space-y-8">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Cut the bull****
          </h2>
          <p className="text-muted-foreground">
            Start building something, now.
          </p>
        </div>

        <Terminal className="mx-auto">
          <AnimatedSpan delay={0}>
            <span className="text-accent">$</span>{" "}
            <TypingAnimation delay={500} duration={50}>
              forge init my-project
            </TypingAnimation>
          </AnimatedSpan>

          <AnimatedSpan delay={2500}>
            <span className="text-green-500">✓</span> Project initialized successfully
          </AnimatedSpan>

          <AnimatedSpan delay={3500}>
            <span className="text-accent">$</span>{" "}
            <TypingAnimation delay={4000} duration={50}>
              forge build --optimize
            </TypingAnimation>
          </AnimatedSpan>

          <AnimatedSpan delay={5500}>
            <span className="text-blue-500">→</span> Building assets...
          </AnimatedSpan>

          <AnimatedSpan delay={6500}>
            <span className="text-green-500">✓</span> Build completed in 2.3s
          </AnimatedSpan>

          <AnimatedSpan delay={7500}>
            <span className="text-accent">$</span>{" "}
            <TypingAnimation delay={8000} duration={50}>
              forge deploy --production
            </TypingAnimation>
          </AnimatedSpan>

          <AnimatedSpan delay={9500}>
            <span className="text-purple-500">🚀</span> Deploying to production...
          </AnimatedSpan>

          <AnimatedSpan delay={10500}>
            <span className="text-green-500">✓</span> Deployed to https://my-project.fonderia.dev
          </AnimatedSpan>
        </Terminal>
      </div>
    </section>
  );
}
