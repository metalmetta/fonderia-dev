import { SparkParticles } from "./SparkParticles";

export const Manifesto = () => {
  return (
    <main id="main">
      <section 
        id="manifesto" 
        className="relative min-h-screen py-24 px-6 grain-overlay bg-charcoal"
        aria-labelledby="manifesto-heading"
      >
        <SparkParticles />
        <article className="relative z-[5] max-w-3xl mx-auto">
          <h2 id="manifesto-heading" className="sr-only">Our Manifesto</h2>
          
          <div className="space-y-8 text-lg md:text-xl leading-relaxed">
            <p className="text-2xl md:text-3xl font-serif font-semibold">
              Fonderia is the forge.
            </p>

            <p className="pt-8">
              A living space where builders gather, where heat turns into form.
            </p>

            <p>
              Where minds collide, melt, and harden into real things: products, code, hardware, systems, everything that hums with tech and purpose.
            </p>

            <p>
              This is where you show up and build.
            </p>

            <p>
              Not for status, not for applause, but because you have to.
            </p>

            <p>
              If it runs, moves, computes, or connects it belongs here.
            </p>

            <p>
              Hardware or software, it doesn't matter.
            </p>

            <p>
              What matters is that it's <em className="italic font-medium">real.</em>
            </p>

            <p>
              We don't worship ideas, we build them.
            </p>

            <p className="text-2xl md:text-3xl font-serif font-semibold pt-8">
              Fonderia is the forge of builders.
            </p>

            <p className="pt-8">
              This is not a community.
            </p>

            <p>
              It's a covenant.
            </p>

            <p>
              A pact between builders who refuse to wait for permission.
            </p>

            <p>
              We are the ones who can't <em className="italic font-medium">not</em> build.
            </p>

            <p>
              The ones who ship, who break, who rebuild.
            </p>

            <p>
              Again and again, until something impossible becomes inevitable.
            </p>

            <p className="pt-8">
              Italy needs a home for builders.
            </p>

            <p>
              Talent has always been here, it just never had a place to collide.
            </p>

            <p>
              We're done waiting for the ecosystem to appear.
            </p>

            <p>
              We're building it ourselves.
            </p>

            <p className="pt-8">
              Fonderia is Milan's forge, but its fire is for all of Europe.
            </p>

            <p>
              A signal to every cracked founder, hacker, and researcher:
            </p>

            <p>
              Get here. Bring your madness.
            </p>

            <p>
              Let's make things that matter.
            </p>

            <p className="pt-8">
              No spectators.
            </p>

            <p>
              No hierarchy.
            </p>

            <p>
              No permission.
            </p>

            <p>
              Just the forge.
            </p>

            <p>
              The fire.
            </p>

            <p>
              And the people who build.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
};
