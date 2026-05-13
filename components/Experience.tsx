import Image from "next/image";

const experiences = [
  {
    role: "Data Engineering Intern",
    company: "Stewart Title",
    location: "Houston, TX",
    dates: "June 2026 – Aug 2026",
    bullets: [
      "Used SQL to analyze large title insurance and property datasets, reducing lookup time by 30%.",
      "Cleaned and updated 10,000+ records related to property ownership, improving data quality.",
      "Built SQL reports that reduced manual work by 40% and accelerated title insurance processing.",
    ],
  },
  {
    role: "Information Technology Intern",
    company: "Fort Bend County",
    location: "Richmond, TX",
    dates: "June 2025 – Aug 2025",
    bullets: [
      "Resolved 200+ IT support tickets in ServiceNow, diagnosing hardware, software, and account issues.",
      "Partnered with the GIS team to digitize and map 150+ schools for county-wide spatial analysis.",
      "Collaborated with AV team to operate 10+ audio/video systems during a mock Commissioner's Court trial.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Microsoft",
    location: "Houston, TX",
    dates: "July 2024 – Aug 2024",
    bullets: [
      "Built a Python translation tool using OOP and the Google Translate API, supporting 100+ language pairs.",
      "Co-built an AI-driven health app for veterans — won 1st place in the Keystone Project competition.",
      "Completed 10+ workshops and 5 mentorship sessions in app design, API integration, and networking.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen flex flex-col justify-center">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="mb-12">
          <p className="font-sans text-sm text-latte tracking-widest uppercase mb-2">Where I&apos;ve worked</p>
          <h2 className="font-serif text-4xl font-bold text-espresso">Experience</h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-parchment-dark" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-8">
                {/* Timeline dot */}
                <div className="absolute left-[-4.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-caramel border-2 border-cream" />

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-espresso">{exp.role}</h3>
                    <p className="font-sans text-sm text-latte">
                      {exp.company} &mdash; {exp.location}
                    </p>
                  </div>
                  <span className="shrink-0 text-xs font-sans text-espresso/40">{exp.dates}</span>
                </div>

                <ul className="space-y-2">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-sm font-sans text-espresso/65 leading-relaxed">
                      <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-caramel" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-16 p-6 bg-parchment border border-parchment-dark rounded-2xl">
          <p className="font-sans text-xs text-latte tracking-widest uppercase mb-3">Education</p>
          <div className="flex items-center gap-4">
            <div className="shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-[#00853E]/10 border border-[#00853E]/20 p-1.5">
              <Image
                src="/unt-eagle.png"
                alt="UNT Eagle"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-espresso">University of North Texas</h3>
              <p className="font-sans text-sm text-espresso/60">B.S. Computer Science &middot; 3.75 GPA &middot; Dean&apos;s List</p>
              <p className="font-sans text-xs text-espresso/40 mt-0.5">NSBE &middot; ColorStack</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
