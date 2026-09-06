import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-800/80 bg-slate-950 py-12">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sky-400 font-mono font-bold text-lg">&gt; dante.dev_</span>
          </div>
          <p className="text-slate-400 text-sm max-w-sm">
            Open for penetration testing engagements, security research collaborations, and full-stack engineering roles.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 text-sm font-medium">
          <a 
            href="https://github.com/NerdCodec" 
            target="_blank" 
            rel="noreferrer" 
            className="px-4 py-2 rounded-lg bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-sky-400 transition-all"
          >
            GitHub
          </a>
          <a 
            href="mailto:contact@dante.dev" 
            className="px-4 py-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20 hover:bg-sky-500/20 transition-all"
          >
            Send Email
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 mt-8 pt-6 border-t border-slate-900 flex justify-between items-center text-xs text-slate-500 font-mono">
        <span>&copy; {new Date().getFullYear()} Dante. All rights reserved.</span>
        <span>Built with React, Vite &amp; Tailwind CSS v4</span>
      </div>
    </footer>
  );
}