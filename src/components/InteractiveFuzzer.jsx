import React, { useState } from 'react';

export default function InteractiveFuzzer() {
  const [target, setTarget] = useState('http://localhost:3000');
  const [logs, setLogs] = useState([]);
  const [running, setRunning] = useState(false);

  const runFuzzer = () => {
    setRunning(true);
    setLogs([]);
    const paths = ['/admin', '/login', '/api/v1/users', '/.env', '/secret'];
    paths.forEach((path, idx) => {
      setTimeout(() => {
        const status = path === '/.env' ? 403 : path === '/secret' ? 404 : 200;
        setLogs(prev => [...prev, `[+] GET ${target}${path} -> [${status}]`]);
        if (idx === paths.length - 1) setRunning(false);
      }, (idx + 1) * 600);
    });
  };

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 font-mono">
      <h3 className="text-teal-400 text-lg font-bold mb-4">Interactive Terminal: Py-Fuzzer Web Demo</h3>
      <div className="flex space-x-2 mb-4">
        <input 
          value={target} 
          onChange={(e) => setTarget(e.target.value)}
          className="bg-slate-900 border border-slate-700 rounded px-3 py-2 text-slate-200 text-sm flex-1 outline-none"
        />
        <button 
          onClick={runFuzzer} 
          disabled={running}
          className="bg-teal-500 text-slate-900 px-4 py-2 rounded font-bold text-sm hover:bg-teal-400 disabled:opacity-50"
        >
          {running ? 'Fuzzing...' : 'Run Fuzzer'}
        </button>
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded p-4 h-40 overflow-y-auto text-xs text-slate-300 space-y-1">
        {logs.length === 0 ? <span className="text-slate-600">Click 'Run Fuzzer' to simulate scan...</span> : logs.map((log, i) => <div key={i}>{log}</div>)}
      </div>
    </div>
  );
}
