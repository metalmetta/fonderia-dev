"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Manifesto", href: "#manifesto" },
  { label: "Format", href: "#format" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "Partners", href: "#partners" },
];

interface NavbarProps {
  onForgeClick: () => void;
}

export const Navbar = ({ onForgeClick }: NavbarProps) => {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
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
      className="fixed top-10 left-0 right-0 z-40 flex items-center justify-between px-6 py-2 bg-charcoal/90 backdrop-blur-sm border-b border-iron-light"
      aria-label="Page navigation"
    >
      <div className="flex items-center overflow-x-auto scrollbar-none">
        {navItems.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className={`px-3 py-1 text-sm rounded-sm whitespace-nowrap transition-colors duration-150 ${
              active === href
                ? "text-foreground"
                : "text-ash-dark hover:text-ash"
            }`}
          >
            {label}
          </a>
        ))}
      </div>

      <Button
        variant="forge"
        size="sm"
        onClick={onForgeClick}
        className="shrink-0 ml-4 text-xs px-4"
      >
        Join
      </Button>
    </nav>
  );
};
