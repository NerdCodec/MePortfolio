import React, { useState } from 'react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const projectList = [
  {
    id: 1,
    title: "OWASP Juice Shop Vulnerability Labs",
    category: "Offensive Security",
    description: "Hands-on exploitation write-ups, proof-of-concept payloads, and root-cause remediation analysis covering XSS, SQLi, IDOR, and BAC.",
    tech: ["Burp Suite", "Docker", "OWASP Top 10", "XSS", "SQLi"],
    github: "https://github.com/NerdCodec/vulnerability-labs"
  },
  {
    id: 2,
    title: "Automated Reconnaissance Pipeline",
    category: "Recon & Automation",
    description: "Custom Bash automation tool integrating Subfinder, Amass, and Httpx for fast domain profiling, asset discovery, and live host identification.",
    tech: ["Bash", "Subfinder", "Amass", "Httpx", "Linux"],
    github: "https://github.com/NerdCodec/recon-pipeline"
  },
  {
    id: 3,
    title: "Web Endpoint & Directory Fuzzer",
    category: "Tool Development",
    description: "Modular Python-based endpoint discovery tool built to rapidly enumerate hidden administrative paths and exposed API routes.",
    tech: ["Python", "HTTP Requests", "Threading", "Fuzzing"],
    github: "https://github.com/NerdCodec/py-fuzzer"
  },
  {
  id: 4,
  title: "DNS Subdomain Enumerator",
  category: "Recon & Automation",
  description: "Python utility for fast attack surface discovery using socket-level A-record resolution to identify active subdomains and infrastructure IP mappings.",
  tech: ["Python", "DNS", "Sockets", "Recon"],
  github: "https://github.com/NerdCodec/sub-fuzzer"
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