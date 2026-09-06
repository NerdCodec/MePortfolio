import React, { useState } from 'react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const projectList = [
    {
      id: 1,
      title: "IPAM System",
      category: "Full-Stack",
      tagline: "Infrastructure / Subnet Tracking",
      description: "IP Address Management platform designed to track subnets, monitor active IP allocations, and streamline network administration.",
      tech: ["React", "Vite", "Tailwind CSS", "Node.js"],
      github: "https://github.com/NerdCodec"
    },
    {
      id: 2,
      title: "Automated Recon Engine",
      category: "Offensive Security",
      tagline: "Automation / Python",
      description: "Custom recon wrapper integrating subdomain enumeration, DNS probing, and target port profiling.",
      tech: ["Python", "Bash", "Security Tools"],
      github: "https://github.com/NerdCodec"
    },
    {
      id: 3,
      title: "Web Vulnerability Labs",
      category: "Research",
      tagline: "OWASP / Bug Hunting",
      description: "Documented proofs-of-concept testing logic flaws, Cross-Site Scripting (XSS), and API vulnerabilities.",
      tech: ["OWASP Top 10", "Burp Suite", "Penetration Testing"],
      github: "https://github.com/NerdCodec"
    }
  ];

  const categories = ['All', 'Full-Stack', 'Offensive Security', 'Research'];

  const filteredProjects = activeFilter === 'All' 
    ? projectList 
    : projectList.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-800/80">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-100 font-sans">Featured Work &amp; Research</h2>
          <p className="text-slate-400 text-sm mt-1">Key software projects and security write-ups.</p>
        </div>

        {/* Dynamic Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                activeFilter === cat
                  ? 'bg-sky-500/20 text-sky-400 border border-sky-500/40'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className="flex flex-col justify-between p-6 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/40 transition-all group"
          >
            <div>
              <span className="text-xs font-mono text-sky-400 block mb-2">{project.tagline}</span>
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