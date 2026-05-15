"use client";

import { useState } from "react";
import {
  SiPython,
  SiJavascript,
  SiSwift,
  SiReact,
  SiFirebase,
  SiNodedotjs,
  SiPandas,
  SiNumpy,
  SiTensorflow,
  SiPostgresql,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { FaDatabase } from "react-icons/fa";
import { TbChartAreaLineFilled } from "react-icons/tb";
import type { IconType } from "react-icons";

type Framework = {
  name: string;
  icon: IconType;
  color: string;
  bg: string;
};

type Skill = {
  name: string;
  icon: IconType;
  color: string;
  bg: string;
  frameworks?: Framework[];
};

const skills: Skill[] = [
  {
    name: "Python",
    icon: SiPython,
    color: "#3776AB",
    bg: "#EAF3FB",
    frameworks: [
      { name: "Pandas", icon: SiPandas, color: "#150458", bg: "#EDE8FB" },
      { name: "NumPy", icon: SiNumpy, color: "#4DABCF", bg: "#E5F5FB" },
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00", bg: "#FFF3E0" },
      { name: "Matplotlib", icon: TbChartAreaLineFilled, color: "#11557C", bg: "#E3EEF5" },
    ],
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    bg: "#FEFAE0",
    frameworks: [
      { name: "React.js", icon: SiReact, color: "#61DAFB", bg: "#E5F9FD" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933", bg: "#E8F5E9" },
    ],
  },
  {
    name: "Swift",
    icon: SiSwift,
    color: "#F05138",
    bg: "#FDECEA",
  },
  {
    name: "SQL",
    icon: FaDatabase,
    color: "#336791",
    bg: "#E8EEF6",
    frameworks: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", bg: "#E8EEF6" },
    ],
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    color: "#FFCA28",
    bg: "#FFFBE6",
  },
  {
    name: "Java",
    icon: DiJava,
    color: "#ED8B00",
    bg: "#FEF3E2",
  },
];

export default function Hero() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-20">
      <div className="max-w-3xl mx-auto px-6 py-16 w-full">

        {/* Intro */}
        <p className="font-sans text-sm text-latte tracking-widest uppercase mb-4">
          Hey, I&apos;m
        </p>
        <h1 className="font-serif text-6xl md:text-7xl font-bold text-espresso leading-tight mb-6">
          David Fakunle
        </h1>
        <p className="font-sans text-xl text-espresso/70 leading-relaxed max-w-xl mb-10">
          CS student at the University of North Texas, building things that matter.
          I like clean code, good art, and apps that actually work and have an impact.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-16">
          <a
            href="mailto:dfakunle06@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-espresso text-cream text-sm font-sans hover:bg-latte transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Say hello
          </a>
          <a
            href="https://www.linkedin.com/in/david-fakunle/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-espresso/20 text-espresso text-sm font-sans hover:border-latte hover:text-latte transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-parchment-dark" />
          <p className="font-sans text-xs text-espresso/40 tracking-widest uppercase">Technologies</p>
          <div className="h-px flex-1 bg-parchment-dark" />
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {skills.map(({ name, icon: Icon, color, bg, frameworks }) => (
            <div
              key={name}
              className="relative"
              onMouseEnter={() => setHovered(name)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Main card */}
              <div
                className="flex flex-col items-center justify-center gap-4 py-8 px-4 rounded-2xl border transition-all duration-200 cursor-default select-none"
                style={{
                  backgroundColor: bg,
                  borderColor: hovered === name && frameworks ? "rgba(212,169,106,0.5)" : "rgba(224,216,200,1)",
                  boxShadow: hovered === name && frameworks ? "0 4px 16px rgba(139,94,60,0.1)" : "none",
                }}
              >
                <Icon size={56} color={color} />
                <span className="font-sans text-sm font-semibold text-espresso/70 text-center">
                  {name}
                </span>
              </div>

              {/* Frameworks dropdown */}
              {frameworks && hovered === name && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50 w-max">
                  <div className="bg-cream border border-parchment-dark rounded-2xl shadow-xl shadow-espresso/10 p-3 flex gap-2">
                    {frameworks.map(({ name: fname, icon: FIcon, color: fcolor, bg: fbg }) => (
                      <div
                        key={fname}
                        className="flex flex-col items-center gap-2 px-4 py-3 rounded-xl border border-parchment-dark"
                        style={{ backgroundColor: fbg }}
                      >
                        <FIcon size={32} color={fcolor} />
                        <span className="font-sans text-[11px] font-medium text-espresso/60 whitespace-nowrap">
                          {fname}
                        </span>
                      </div>
                    ))}
                  </div>
                  {/* Arrow */}
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-cream border-l border-t border-parchment-dark rotate-45" />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
