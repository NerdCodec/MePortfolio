import React from 'react';

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-teal-400 mb-6">Contact & Engagement</h1>
      <div className="bg-slate-800/80 border border-slate-700 backdrop-blur rounded-xl p-8 grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-100">Get In Touch</h2>
          <p className="text-slate-400">Available for penetration testing, security research, and tool development.</p>
          <div className="space-y-3 pt-2">
            <p className="text-slate-300"><strong>Email:</strong> dante.sec@example.com</p>
            <p className="text-slate-300"><strong>GitHub:</strong> github.com/NerdCodec</p>
            <p className="text-slate-300"><strong>Location:</strong> Kali Linux Lab / Remote</p>
          </div>
        </div>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" className="w-full bg-slate-900 border border-slate-700 rounded p-3 text-slate-100 focus:border-teal-400 outline-none" />
          <input type="email" placeholder="Your Email" className="w-full bg-slate-900 border border-slate-700 rounded p-3 text-slate-100 focus:border-teal-400 outline-none" />
          <textarea rows="4" placeholder="Message" className="w-full bg-slate-900 border border-slate-700 rounded p-3 text-slate-100 focus:border-teal-400 outline-none"></textarea>
          <button className="w-full py-3 bg-teal-500 hover:bg-teal-600 font-bold text-slate-900 rounded transition">Send Message</button>
        </form>
      </div>
    </div>
  );
}