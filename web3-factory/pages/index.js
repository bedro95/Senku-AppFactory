import React, { useState, useEffect } from 'react';
import Head from 'next/head';

/**
 * PROJECT: SENKU NEURAL-CORE 2050
 * STATUS: ULTRA-FUTURISTIC INTERFACE
 * DEVELOPER: Bader Alkorgli
 */

export default function Senku2050() {
  const [address, setAddress] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [result, setResult] = useState(null);

  // تأثير التقدم في المسح (Neural Loading)
  useEffect(() => {
    if (isScanning) {
      const interval = setInterval(() => {
        setScanProgress(prev => (prev < 100 ? prev + 1 : 100));
      }, 30);
      return () => clearInterval(interval);
    } else {
      setScanProgress(0);
    }
  }, [isScanning]);

  const startNeuralScan = () => {
    if (!address) return;
    setIsScanning(true);
    setResult(null);
    setTimeout(() => {
      setResult({
        TRUST_INDEX: "99.8%",
        NEURAL_MATCH: "STABLE",
        LIQUIDITY: "DEEP-LOCKED",
        THREAT_LEVEL: "ZERO",
        ENTITY: "VERIFIED"
      });
      setIsScanning(false);
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-[#02040a] text-green-500 font-mono overflow-hidden relative selection:bg-green-500/30">
      <Head>
        <title>SENKU | NEURAL INTERFACE 2050</title>
      </Head>

      {/* 🌌 Cyber Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#166534_1px,transparent_1px),linear-gradient(to_bottom,#166534_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        
        {/* Glowing Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-green-900/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full animate-pulse" />
      </div>

      {/* 🧪 Main Interface */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
        
        {/* Floating Scan ID */}
        <div className="absolute top-10 left-10 text-[10px] tracking-[0.3em] opacity-50 hidden md:block">
          SYSTEM_STATUS: <span className="text-green-400">OPTIMIZED</span><br />
          NEURAL_LINK: <span className="text-green-400">ACTIVE</span>
        </div>

        {/* 💠 Futuristic Title Section */}
        <div className="relative group mb-16">
          <h1 className="text-[18vw] md:text-[12rem] font-black italic tracking-tighter leading-none text-white mix-blend-difference drop-shadow-[0_0_30px_rgba(34,197,94,0.3)]">
            SENKU
          </h1>
          <div className="absolute -bottom-4 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-500 to-transparent shadow-[0_0_15px_#22c55e]" />
          <div className="mt-4 flex justify-between text-[8px] tracking-[1em] uppercase text-green-400 font-bold">
            <span>Neural</span>
            <span>Protocol</span>
            <span>2050</span>
          </div>
        </div>

        {/* 🖥️ The Control Console */}
        <div className="w-full max-w-2xl bg-black/40 backdrop-blur-2xl border border-green-500/20 rounded-0 p-1 relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,1)]">
          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-green-500" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-green-500" />

          <div className="p-8 space-y-6">
            <div className="relative">
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder=">>> DEPLOY CONTRACT ADDRESS_"
                className="w-full bg-black/60 border border-green-900/50 py-5 px-6 outline-none focus:border-green-400 text-green-400 placeholder:text-green-900 transition-all font-mono text-sm tracking-widest"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-1">
                <div className="w-1 h-4 bg-green-500/20 animate-bounce" />
                <div className="w-1 h-4 bg-green-500/40 animate-bounce [animation-delay:0.2s]" />
                <div className="w-1 h-4 bg-green-500/60 animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>

            <button
              onClick={startNeuralScan}
              disabled={isScanning}
              className="w-full group relative overflow-hidden bg-green-500 text-black py-5 font-black uppercase tracking-[0.5em] text-xs transition-all active:scale-[0.98]"
            >
              <span className="relative z-10">{isScanning ? `ANALYZING ${scanProgress}%` : "INITIALIZE NEURAL BREACH"}</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>

          {/* Progress Bar */}
          {isScanning && (
            <div className="h-1 bg-green-900 w-full overflow-hidden">
              <div className="h-full bg-green-400 shadow-[0_0_15px_#22c55e] transition-all duration-100" style={{ width: `${scanProgress}%` }} />
            </div>
          )}
        </div>

        {/* 📊 Neural Data Readout */}
        {result && (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-5 gap-1 w-full max-w-4xl">
            {Object.entries(result).map(([k, v]) => (
              <div key={k} className="bg-green-500/5 border border-green-500/10 p-4 relative group hover:bg-green-500/10 transition-all">
                <p className="text-[7px] text-green-700 font-bold mb-1 tracking-tighter">{k}</p>
                <p className="text-xs font-black text-white">{v}</p>
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-green-400 group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        )}
      </main>

      {/* 🤖 The 2050 Agent */}
      <div className="fixed bottom-10 right-10 flex flex-col items-end gap-4 z-50">
        <div className="bg-black/80 border-r-2 border-green-500 p-4 backdrop-blur-xl max-w-[200px] shadow-2xl">
          <p className="text-[9px] leading-relaxed tracking-wider">
            <span className="text-green-300 font-bold">SENKU_AI:</span> {isScanning ? "Diverting power to neural processors..." : "Ready for next instruction, Bader."}
          </p>
        </div>
        <div className="relative">
          <img src="https://senku.fun/senku.GIF" className="w-24 h-24 border border-green-500/30 grayscale hover:grayscale-0 transition-all duration-700 shadow-[0_0_30px_rgba(34,197,94,0.2)]" />
          <div className="absolute inset-0 border-2 border-green-500/20 animate-ping rounded-full scale-75" />
        </div>
      </div>

      <footer className="fixed bottom-4 left-1/2 -translate-x-1/2 text-[8px] tracking-[1.5em] opacity-30 pointer-events-none uppercase">
        Senku Neural OS v9.0 // Bader Alkorgli
      </footer>
    </div>
  );
}
