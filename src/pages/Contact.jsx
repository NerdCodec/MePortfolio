import React from 'react';

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-cyan-400 mb-6">Contact & Engagement</h1>
      <div className="bg-zinc-800/80 border border-zinc-700 backdrop-blur rounded-xl p-8 grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-100">Get In Touch</h2>
          <p className="text-zinc-400">Available for penetration testing, security research, and tool development.</p>
          <div className="space-y-3 pt-2">
            <p className="text-zinc-300"><strong>Email:</strong> dante.offsec@protonmail.com</p>
            <p className="text-zinc-300"><strong>GitHub:</strong> github.com/NerdCodec</p>
            <p className="text-zinc-300"><strong>Location:</strong> Kali Linux Lab / Remote</p>
          </div>
        </div>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" className="w-full bg-zinc-900 border border-zinc-700 rounded p-3 text-zinc-100 focus:border-cyan-400 outline-none" />
          <input type="email" placeholder="Your Email" className="w-full bg-zinc-900 border border-zinc-700 rounded p-3 text-zinc-100 focus:border-cyan-400 outline-none" />
          <textarea rows="4" placeholder="Message" className="w-full bg-zinc-900 border border-zinc-700 rounded p-3 text-zinc-100 focus:border-cyan-400 outline-none"></textarea>
          <button className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 font-bold text-zinc-900 rounded transition">Send Message</button>
        </form>
      </div>
    </div>
  );
}