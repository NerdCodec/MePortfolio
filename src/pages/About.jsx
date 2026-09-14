import React from 'react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-teal-400 mb-6">About Dante</h1>
      <div className="bg-slate-800/80 border border-slate-700 backdrop-blur rounded-xl p-8 space-y-4">
        <p className="text-slate-300 leading-relaxed">
          Offensive Security Researcher specializing in web application vulnerability analysis, automated recon tooling, and red-team development.
        </p>
        <h3 className="text-xl font-semibold text-teal-300 pt-4">Core Competencies</h3>
        <ul className="grid grid-cols-2 gap-3 text-slate-300">
          <li className="bg-slate-900/60 p-3 rounded border border-slate-700/50">OWASP Top 10 Exploitation</li>
          <li className="bg-slate-900/60 p-3 rounded border border-slate-700/50">Custom Recon Automation (Bash/Python)</li>
          <li className="bg-slate-900/60 p-3 rounded border border-slate-700/50">IDOR & Access Control Audit</li>
          <li className="bg-slate-900/60 p-3 rounded border border-slate-700/50">Source Code & Asset Inspection</li>
        </ul>
      </div>
    </div>
  );
}