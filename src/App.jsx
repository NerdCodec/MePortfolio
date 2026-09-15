import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import InteractiveFuzzer from './components/InteractiveFuzzer';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#030712] text-slate-100 font-mono">
      {/* Background Cyber Grid */}
      <div className="fixed inset-0 cyber-grid-bg pointer-events-none z-0"></div>
      <div className="cyber-scanline"></div>

      {/* Global Header */}
      <Navbar />

      {/* Page Routing */}
      <div className="pt-28 relative z-10">
        <Routes>
          <Route path="/" element={
            <div className="max-w-6xl mx-auto px-6 py-8 space-y-12">
              <Hero />
              <Projects />
            </div>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<div className="max-w-6xl mx-auto px-6 py-8"><Projects /></div>} />
          <Route path="/terminal" element={<div className="max-w-4xl mx-auto px-6 py-8"><InteractiveFuzzer /></div>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}