import React from 'react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-cyan-400 mb-6">About Dante</h1>
      <div className="bg-zinc-800/80 border border-zinc-700 backdrop-blur rounded-xl p-8 space-y-4">
        <p className="text-zinc-300 leading-relaxed">
          Offensive Security Researcher specializing in web application vulnerability analysis, automated recon tooling, and red-team development.
        </p>
        <h3 className="text-xl font-semibold text-cyan-300 pt-4">Core Competencies</h3>
        <ul className="grid grid-cols-2 gap-3 text-zinc-300">
          <li className="bg-zinc-900/60 p-3 rounded border border-zinc-700/50">OWASP Top 10 Exploitation</li>
          <li className="bg-zinc-900/60 p-3 rounded border border-zinc-700/50">Custom Recon Automation (Bash/Python)</li>
          <li className="bg-zinc-900/60 p-3 rounded border border-zinc-700/50">IDOR & Access Control Audit</li>
          <li className="bg-zinc-900/60 p-3 rounded border border-zinc-700/50">Source Code & Asset Inspection</li>
        </ul>
      </div>
    </div>
  );
}