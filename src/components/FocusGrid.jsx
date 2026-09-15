import React from 'react';

export default function FocusGrid() {
  const capabilities = [
    {
      id: "01",
      title: "Web Pentesting",
      heading: "Vulnerability Hunting",
      desc: "Active hunting focused on OWASP Top 10, logic flaws, XSS, and API security testing."
    },
    {
      id: "02",
      title: "Development",
      heading: "Full-Stack Apps",
      desc: "Building scalable platforms with React, Vite, Tailwind, Supabase, and Node.js."
    },
    {
      id: "03",
      title: "Automation",
      heading: "Security Tooling",
      desc: "Crafting custom recon engines, fuzzers, and scripts to automate security workflows."
    }
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-6">
      {capabilities.map((item) => (
        <div key={item.id} className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 text-left hover:border-zinc-700 transition-all">
          <div className="text-sky-400 font-mono text-sm mb-2">&gt; {item.id}. {item.title}</div>
          <h3 className="text-lg font-bold text-zinc-200 mb-2">{item.heading}</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </section>
  );
}