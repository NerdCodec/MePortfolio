import React from 'react';

export default function Hero() {
  return (
    <div className="text-center space-y-4 py-8">
      <h1 className="text-5xl font-black tracking-tight text-[#00f0ff] drop-shadow-[0_0_12px_rgba(0,240,255,0.8)]">
        OFFENSIVE SECURITY LABS
      </h1>
      <p className="text-[#ff0055] font-semibold tracking-widest text-sm">
        AUTOMATED RECON // VULNERABILITY RESEARCH // CUSTOM EXPLOITS
      </p>
      <div className="pt-4">
        <a 
          href="/Portfolio_Architecture_Guide.pdf" 
          download 
          className="px-6 py-3 bg-[#00f0ff] text-black font-extrabold hover:bg-[#ff0055] hover:text-white transition shadow-[0_0_20px_rgba(0,240,255,0.6)]"
        >
          DOWNLOAD BLUEPRINT (PDF)
        </a>
      </div>
    </div>
  );
}