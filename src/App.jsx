import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur border-b border-slate-800 z-50 px-6 py-4 flex justify-between items-center">
        <span className="text-xl font-bold text-teal-400">Dante | OffSec</span>
        <div className="space-x-6 text-sm font-medium">
          <a href="#about" className="hover:text-teal-400 transition">About</a>
          <a href="#research" className="hover:text-teal-400 transition">Security Research</a>
          <a href="#contact" className="hover:text-teal-400 transition">Contact</a>
        </div>
      </nav>

      <div className="pt-20">
        {/* About Section / Hero */}
        <section id="about">
          <Hero />
        </section>

        {/* Security Research & Projects */}
        <section id="research" className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold text-teal-400 mb-6">Security Research & Tools</h2>
          <Projects />
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-800">
          <h2 className="text-3xl font-bold text-teal-400 mb-4">Contact & Engagement</h2>
          <p className="text-slate-400 mb-6">Open for penetration testing opportunities, vulnerability research collaboration, and offensive tool development.</p>
          <div className="flex space-x-4">
            <a href="https://github.com/NerdCodec" target="_blank" rel="noreferrer" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded border border-slate-700 text-teal-400">GitHub Profile</a>
            <a href="mailto:your-email@example.com" className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-slate-900 font-bold rounded">Get In Touch</a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;