import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#030712]/90 backdrop-blur border-b border-[#00f0ff]/40 z-50 px-8 py-4 flex justify-between items-center shadow-[0_0_20px_rgba(0,240,255,0.2)]">
      <Link to="/" className="text-xl font-bold tracking-wider text-[#00f0ff] hover:text-[#ff0055] transition">
        DANTE // OFFSEC
      </Link>
      <div className="space-x-6 text-sm font-bold tracking-widest text-slate-200">
        <Link to="/" className="hover:text-[#00f0ff] transition">HOME</Link>
        <Link to="/about" className="hover:text-[#00f0ff] transition">ABOUT</Link>
        <Link to="/research" className="hover:text-[#00f0ff] transition">RESEARCH</Link>
        <Link to="/terminal" className="hover:text-[#00f0ff] transition">TERMINAL</Link>
        <Link to="/contact" className="hover:text-[#00f0ff] transition">CONTACT</Link>
      </div>
    </nav>
  );
}