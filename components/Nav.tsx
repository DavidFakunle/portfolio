"use client";

import { useState, useEffect } from "react";

const tabs = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Music", href: "#music" },
  { label: "Art", href: "#art" },
];

export default function Nav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = tabs.map((t) => t.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-sm border-b border-parchment-dark">
      <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#home"
          className="font-serif text-lg font-semibold text-espresso tracking-tight hover:text-latte transition-colors"
        >
          David Fakunle
        </a>

        <div className="flex items-center gap-6">
          {tabs.map((tab) => (
            <a
              key={tab.href}
              href={tab.href}
              className={`nav-link text-sm font-sans text-espresso/70 hover:text-espresso ${
                active === tab.href.slice(1) ? "active text-espresso" : ""
              }`}
            >
              {tab.label}
            </a>
          ))}

          <div className="flex items-center gap-3 ml-2 pl-4 border-l border-parchment-dark">
            <a
              href="mailto:dfakunle06@gmail.com"
              aria-label="Email"
              className="text-espresso/50 hover:text-latte transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/david-fakunle/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-espresso/50 hover:text-latte transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
