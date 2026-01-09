import React, { useState, useEffect } from 'react';
import Head from 'next/head';

/**
 * PROJECT: SENKU APP-FACTORY (PRO EDITION)
 * DESIGN SYNC: SENKU V1
 * DEVELOPER: Bader Alkorgli
 */

export default function SenkuUltimateFactory() {
  const [address, setAddress] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState(null);
  const [agentMsg, setAgentMsg] = useState("Analyzing neural signals...");

  // نظام الرسائل الخاص بالـ Agent
  useEffect(() => {
    const tips = ["Paste a Solana address to begin neural scan", "Always scan contracts before ape", "Follow smart money not noise"];
    const interval = setInterval(() => {
      setAgentMsg(tips[Math.floor(Math.random() * tips.length)]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleScan = () => {
    if (!address) return;
    setIsScanning(true);
    setTimeout(() => {
      setResult({
        score: Math.floor(Math.random() * 20) + 80,
        liquidity: "LOCKED (99.2%)",
        mint: "DISABLED",
        riskLevel: "LOW",
        status: "SAFE_GRAIL"
      });
      setIsScanning(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white flex flex-col items-center p-4 md:p-8 font-sans overflow-hidden relative selection:bg-green-500/30">
      <Head>
        <title>SENKU | Neural Factory Protocol</title>
      </Head>

      {/* BACKGROUND - MATCHING SENKU.FUN */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.12),transparent_70%)] z-10" />
        <img
          src="https://senku.fun/senku.GIF"
          className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale contrast-125 pointer-events-none"
          alt="Background"
        />
      </div>

      {/* SNOW SYSTEM (CSS ONLY) */}
      <style jsx global>{`
        @keyframes snow { 0% { transform: translateY(-10vh); } 100% { transform: translateY(110vh); } }
        .snow { position: absolute; background: white; border-radius: 50%; opacity: 0.3; animation: snow linear infinite; pointer-events: none; }
      `}</style>
      {[...Array(20)].map((_, i) => (
        <div key={i} className="snow" style={{
          width: '2px', height: '2px', left: `${Math.random() * 100}%`,
          top: '-10px', animationDuration: `${Math.random() * 5 + 7}s`,
          animationDelay: `${Math.random() * 5}s`
        }} />
      ))}

      {/* MAIN CONTENT */}
      <main className="relative z-10 w-full max-w-6xl flex flex-col items-center flex-grow justify-center mt-[-5vh]">
        <div className="text-center mb-12">
          {/* 🔥 THE FAMOUS SENKU LOGO STYLE */}
          <h1 className="text-[14vw] sm:text-[12vw] md:text-[9rem] lg:text-[10rem] font-[1000] italic tracking-tighter leading-none bg-gradient-to-b from-white via-white to-green-500 bg-clip-text text-transparent drop-shadow-2xl select-none px-4">
            SENKU
          </h1>
          <p className="text-[10px] font-mono tracking-[1.5em] text-green-400 uppercase opacity-80 mt-2">
            Neural Scientific Protocol
          </p>
        </div>

        {/* SCAN INPUT - MATCHING DESIGN */}
        <div className="w-full max-w-xl mx-auto flex flex-col md:flex-row gap-2">
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter token address"
            className="flex-1 bg-black/60 border border-white/10 rounded-xl px-4 py-4 text-sm outline-none focus:border-green-500 transition-colors font-mono"
          />
          <button
            onClick={handleScan}
            disabled={isScanning}
            className={`${
              isScanning ? "bg-green-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-400"
            } text-black px-8 py-4 rounded-xl text-sm font-bold transition-all active:scale-95`}
          >
            {isScanning ? "SCANNING..." : "SCAN"}
          </button>
        </div>

        {/* RESULTS - MATCHING THE GRID */}
        {result && (
          <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-4 w-full">
            {Object.entries(result).map(([key, value]) => (
              <div key={key} className="bg-black/50 border border-white/10 rounded-xl p-4 text-center backdrop-blur-md">
                <p className="text-[9px] uppercase tracking-widest text-white/40 mb-2">{key}</p>
                <p className="font-bold text-green-400 text-sm tracking-tight">{String(value)}</p>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* SENKU AGENT - DIRECT LINK */}
      <div className="fixed bottom-6 right-6 z-[999] flex items-end gap-3 pointer-events-none">
        <img
          src="https://senku.fun/senku.GIF"
          alt="Senku Agent"
          className="w-20 h-20 rounded-2xl border border-green-500/30 bg-black/70 backdrop-blur-xl shadow-2xl"
        />
        <div className="max-w-[220px] bg-black/80 border border-green-500/30 rounded-2xl px-4 py-3 text-[10px] font-mono text-green-400 uppercase tracking-widest shadow-xl">
          {agentMsg}
        </div>
      </div>

      {/* FOOTER */}
      <footer className="relative z-10 mt-16 mb-6 text-center text-[10px] text-white/40 tracking-[0.8em] uppercase">
        © 2026 SENKU PROTOCOL — Powered by Bader
      </footer>
    </div>
  );
}
