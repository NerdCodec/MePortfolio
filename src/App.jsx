import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './components/Projects';
import InteractiveFuzzer from './components/InteractiveFuzzer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans relative">
      <nav className="fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur border-b border-slate-800 z-50 px-8 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-teal-400">Dante | OffSec</Link>
        <div className="space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-teal-400">Home</Link>
          <Link to="/about" className="hover:text-teal-400">About</Link>
          <Link to="/research" className="hover:text-teal-400">Security Research</Link>
          <Link to="/terminal" className="hover:text-teal-400">Live Terminal</Link>
          <Link to="/contact" className="hover:text-teal-400">Contact</Link>
        </div>
      </nav>

      <div className="pt-24 relative z-10">
        <Routes>
          <Route path="/" element={
            <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
              <div className="text-center space-y-4">
                <h1 className="text-5xl font-extrabold text-slate-100">Offensive Security Portfolio</h1>
                <p className="text-slate-400 max-w-2xl mx-auto">Vulnerability research, automated recon scripts, and custom tool development.</p>
                <div className="pt-4">
                  <a href="/Portfolio_Architecture_Guide.pdf" download className="px-5 py-3 bg-teal-500 text-slate-900 font-bold rounded hover:bg-teal-400 transition">Download Architecture Guide (PDF)</a>
                </div>
              </div>
              <Projects />
            </div>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<div className="max-w-6xl mx-auto px-6 py-12"><Projects /></div>} />
          <Route path="/terminal" element={<div className="max-w-4xl mx-auto px-6 py-12"><InteractiveFuzzer /></div>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}