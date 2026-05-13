const projects = [
  {
    name: "Crowd!",
    description:
      "Real-time campus event and crowd-visualization iOS app. Built with a partner — 100+ active users, live on the App Store. Uses GeoFire for \"near me\" searches, dynamic clustering, and a fire-pin system for high-activity zones.",
    tags: ["Swift", "SwiftUI", "Firebase", "GeoFire", "Agentic AI"],
    link: "https://apps.apple.com/us/app/crowd/id6754718385",
    dates: "2024 – Present",
    badge: "App Store",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="mb-12">
          <p className="font-sans text-sm text-latte tracking-widest uppercase mb-2">What I&apos;ve built</p>
          <h2 className="font-serif text-4xl font-bold text-espresso">Projects</h2>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-parchment border border-parchment-dark rounded-2xl p-6 hover:border-latte/40 hover:shadow-lg hover:shadow-latte/10 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-espresso group-hover:text-latte transition-colors">
                    {project.name}
                  </h3>
                  <span className="text-xs font-sans text-espresso/40">{project.dates}</span>
                </div>
                <span className="shrink-0 text-xs font-sans px-3 py-1 bg-espresso/8 border border-espresso/10 rounded-full text-espresso/60">
                  {project.badge}
                </span>
              </div>

              <p className="font-sans text-sm text-espresso/65 leading-relaxed mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 text-xs font-sans text-latte bg-cream border border-parchment-dark rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
