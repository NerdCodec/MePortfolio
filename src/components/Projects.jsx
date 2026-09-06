import React from 'react';

export default function Projects() {
  const projectList = [
    {
      id: 1,
      title: "SafariHub PWA",
      category: "Full-Stack / React",
      description: "Progressive Web Application built with modern React, Vite, and offline caching capabilities.",
      tech: ["React", "Vite", "Tailwind CSS", "PWA"],
      github: "https://github.com/NerdCodec"
    },
    {
      id: 2,
      title: "Automated Recon Engine",
      category: "Offensive Tooling / Python",
      description: "Custom recon wrapper integrating subdomain enumeration, DNS probing, and target port profiling.",
      tech: ["Python", "Bash", "Security Tools"],
      github: "https://github.com/NerdCodec"
    },
    {
      id: 3,
      title: "Web Vulnerability Labs",
      category: "Security Research",
      description: "Documented proofs-of-concept testing logic flaws, Cross-Site Scripting (XSS), and API vulnerabilities.",
      tech: ["OWASP Top 10", "Burp Suite", "Penetration Testing"],
      github: "https://github.com/NerdCodec"
    }
  ];

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-800/80">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-2xl font-bold text-slate-100 font-sans">Featured Work &amp; Research</h2>
          <p className="text-slate-400 text-sm mt-1">Key software projects and security write-ups.</p>
        </div>
        <span className="text-xs font-mono text-sky-400 bg-sky-500/10 border border-sky-500/20 px-3 py-1 rounded-full">
          SHOWCASE
        </span>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {projectList.map((project) => (
          <div 
            key={project.id} 
            className="flex flex-col justify-between p-6 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/40 transition-all group"
          >
            <div>
              <span className="text-xs font-mono text-sky-400 block mb-2">{project.category}</span>
              <h3 className="text-xl font-bold text-slate-100 group-hover:text-sky-400 transition-colors mb-3">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="text-[11px] font-mono bg-slate-800 text-slate-300 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 text-xs font-semibold">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-slate-300 hover:text-sky-400 transition-colors"
                >
                  Source Code &rarr;
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}