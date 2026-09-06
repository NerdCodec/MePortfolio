import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FocusGrid from './components/FocusGrid';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
      <Navbar />
      <Hero />
      <FocusGrid />
      <Projects />
      <Footer />
    </div>
  );
}
