import React from 'react';

export default function Navbar() {
  return (
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
  );
}