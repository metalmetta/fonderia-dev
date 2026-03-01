"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Manifesto", href: "#manifesto" },
  { label: "Format", href: "#format" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "Partners", href: "#partners" },
];

export const Navbar = () => {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    navItems.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-10 left-0 right-0 z-40 flex items-center px-6 py-2 transition-all duration-300 ${
        scrolled ? "bg-charcoal/90 backdrop-blur-sm border-b border-iron-light" : "bg-transparent border-b border-transparent"
      }`}
      aria-label="Page navigation"
    >
      <div className="flex items-center overflow-x-auto scrollbar-none">
        {navItems.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className={`px-3 py-1 text-sm rounded-sm whitespace-nowrap transition-colors duration-150 ${
              active === href ? "text-foreground" : "text-ash-dark hover:text-ash"
            }`}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
};
