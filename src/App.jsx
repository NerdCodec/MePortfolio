import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <span className="text-sky-400 font-mono font-bold text-xl">&gt; dante.dev_</span>
        </div>
        <div className="flex items-center gap-6 text-sm font-medium text-slate-400">
          <a href="#about" className="hover:text-sky-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-sky-400 transition-colors">Projects</a>
          <a href="#research" className="hover:text-sky-400 transition-colors">Security Research</a>
          <a href="#contact" className="px-4 py-2 rounded-md bg-sky-500/10 text-sky-400 border border-sky-500/20 hover:bg-sky-500/20 transition-all">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-block px-3 py-1 mb-6 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-mono">
          OFFENSIVE SECURITY & FULL-STACK ENGINEERING
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-50 mb-6 leading-tight">
          Probing Web Systems &amp; Building <br className="hidden md:inline"/> Secure Digital Products.
        </h1>
        
        <p className="max-w-2xl mx-auto text-slate-400 text-lg mb-10 leading-relaxed">
          Specializing in Web Penetration Testing, Custom Security Automation, and Modern Web Applications.
        </p>

        {/* Action Buttons */}
        <div className="flex justify-center items-center gap-4">
          <a href="#projects" className="px-6 py-3 rounded-lg bg-sky-500 text-slate-950 font-semibold hover:bg-sky-400 transition-all shadow-lg shadow-sky-500/10">
            View Work
          </a>
          <a href="#github" className="px-6 py-3 rounded-lg bg-slate-900 text-slate-200 border border-slate-800 font-semibold hover:bg-slate-800 hover:border-slate-700 transition-all">
            GitHub Profile
          </a>
        </div>
      </main>

      {/* Focus Area Cards */}
      <section className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 text-left">
          <div className="text-sky-400 font-mono text-sm mb-2">&gt; 01. Web Pentesting</div>
          <h3 className="text-lg font-bold text-slate-200 mb-2">Vulnerability Hunting</h3>
          <p className="text-slate-400 text-sm leading-relaxed">Active hunting focused on OWASP Top 10, logic flaws, and API security.</p>
        </div>
        <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 text-left">
          <div className="text-sky-400 font-mono text-sm mb-2">&gt; 02. Development</div>
          <h3 className="text-lg font-bold text-slate-200 mb-2">Full-Stack Apps</h3>
          <p className="text-slate-400 text-sm leading-relaxed">Building scalable platforms with React, Vite, Tailwind, Supabase, and Node.js.</p>
        </div>
        <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 text-left">
          <div className="text-sky-400 font-mono text-sm mb-2">&gt; 03. Automation</div>
          <h3 className="text-lg font-bold text-slate-200 mb-2">Security Tooling</h3>
          <p className="text-slate-400 text-sm leading-relaxed">Crafting custom recon engines and scanners to automate security workflows.</p>
        </div>
      </section>
    </div>
  );
}