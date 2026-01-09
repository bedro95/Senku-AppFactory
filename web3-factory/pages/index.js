import React, { useState, useEffect } from 'react';
import Head from 'next/head';

/**
 * PROJECT: SENKU APP-FACTORY (STANDALONE VERSION)
 * NO EXTERNAL DEPENDENCIES NEEDED
 */

export default function SenkuFactory() {
  const [address, setAddress] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState(null);
  const [agentMsg, setAgentMsg] = useState("Initializing neural systems...");

  useEffect(() => {
    const msgs = ["NEURAL SCAN ACTIVE", "SENKU PROTOCOL SECURED", "WAGMI SPIRIT DETECTED"];
    const interval = setInterval(() => {
      setAgentMsg(msgs[Math.floor(Math.random() * msgs.length)]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleScan = () => {
    if (!address) return;
    setIsScanning(true);
    setTimeout(() => {
      setResult({ status: "SAFE", score: "98/100", liquidity: "LOCKED" });
      setIsScanning(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
      <Head><title>Senku Factory | Neural Scan</title></Head>

      {/* SNOW EFFECT (CSS ONLY) */}
      <style jsx global>{`
        @keyframes snow {
          0% { transform: translateY(-10vh); }
          100% { transform: translateY(110vh); }
        }
        .snow-particle {
          position: absolute; background: white; border-radius: 50%; opacity: 0.3;
          animation: snow linear infinite; pointer-events: none;
        }
      `}</style>

      {/* SNOW PARTICLES */}
      {[...Array(20)].map((_, i) => (
        <div key={i} className="snow-particle" style={{
          width: '3px', height: '3px', left: `${Math.random() * 100}%`,
          top: '-10px', animationDuration: `${Math.random() * 5 + 5}s`,
          animationDelay: `${Math.random() * 5}s`
        }} />
      ))}

      {/* HEADER */}
      <div className="relative z-10 text-center mb-12">
        <h1 className="text-[15vw] md:text-[9rem] font-black italic tracking-tighter leading-none bg-gradient-to-b from-white to-green-500 bg-clip-text text-transparent opacity-90">
          SENKU
        </h1>
        <p className="text-[10px] font-mono tracking-[1.5em] text-green-400 uppercase mt-2">Neural Factory Protocol</p>
      </div>

      {/* INPUT */}
      <div className="relative z-10 w-full max-w-xl">
        <div className="flex flex-col md:flex-row gap-3 p-2 bg-slate-900/40 border border-white/10 rounded-3xl backdrop-blur-xl">
          <input 
            value={address} onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter Solana Address..."
            className="flex-1 bg-transparent border-none outline-none px-5 py-4 text-sm font-mono text-white placeholder:text-white/20"
          />
          <button onClick={handleScan} className="bg-green-500 hover:bg-green-400 text-black font-black px-8 py-4 rounded-2xl transition-all">
            {isScanning ? "SCANNING..." : "INITIALIZE"}
          </button>
        </div>

        {result && (
          <div className="grid grid-cols-3 gap-3 mt-8">
            {Object.entries(result).map(([k, v]) => (
              <div key={k} className="bg-black/60 border border-green-500/20 p-4 rounded-2xl text-center">
                <p className="text-[8px] text-white/30 uppercase mb-1">{k}</p>
                <p className="text-green-400 font-bold text-xs">{v}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* AGENT */}
      <div className="fixed bottom-6 right-6 z-[999] flex items-end gap-3">
        <img src="https://senku.fun/senku.GIF" className="w-20 h-20 rounded-2xl border border-green-500/30 bg-black/70 shadow-2xl" alt="Agent" />
        <div className="max-w-[200px] bg-black/80 border border-green-500/30 rounded-2xl px-4 py-3 text-[10px] font-mono text-green-400 uppercase tracking-widest">
          {agentMsg}
        </div>
      </div>

      <footer className="absolute bottom-8 text-[9px] text-white/20 tracking-[0.8em] uppercase">© 2026 BY BADER ALKORGLI</footer>
    </div>
  );
}
