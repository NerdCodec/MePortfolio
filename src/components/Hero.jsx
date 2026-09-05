import React from 'react';

export default function Hero() {
  return (
    <main className="max-w-5xl mx-auto px-6 pt-20 pb-12 text-center">
      <div className="inline-block px-3 py-1 mb-6 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-mono">
        OFFENSIVE SECURITY & FULL-STACK ENGINEERING
      </div>
      
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-50 mb-6 leading-tight">
        Probing Web Systems &amp; Building <br className="hidden md:inline"/> Secure Digital Products.
      </h1>
      
      <p className="max-w-2xl mx-auto text-slate-400 text-lg mb-10 leading-relaxed">
        Specializing in Web Penetration Testing, Custom Security Automation, and Modern Web Applications.
      </p>

      <div className="flex justify-center items-center gap-4">
        <a href="#projects" className="px-6 py-3 rounded-lg bg-sky-500 text-slate-950 font-semibold hover:bg-sky-400 transition-all shadow-lg shadow-sky-500/10">
          View Work
        </a>
        <a href="https://github.com/NerdCodec" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-lg bg-slate-900 text-slate-200 border border-slate-800 font-semibold hover:bg-slate-800 hover:border-slate-700 transition-all">
          GitHub Profile
        </a>
      </div>
    </main>
  );
}