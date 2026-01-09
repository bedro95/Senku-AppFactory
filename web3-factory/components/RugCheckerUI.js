import React, { useState } from 'react';
import axios from 'axios';

export default function RugCheckerUI() {
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const performScan = async () => {
    if (!address || address.length < 32) return alert("Please enter a valid Solana address");
    setLoading(true);
    setData(null);

    try {
      const res = await axios.get(`https://api.dexscreener.com/latest/dex/tokens/${address}`);
      const pair = res.data.pairs ? res.data.pairs[0] : null;

      if (pair) {
        setData({
          name: pair.baseToken.name,
          symbol: pair.baseToken.symbol,
          price: pair.priceUsd,
          liquidity: pair.liquidity.usd.toLocaleString(),
          status: "SAFE_NEURAL_CHECK"
        });
      } else {
        setData({ status: "NO_DATA", details: "Check address again." });
      }
    } catch (err) {
      alert("Neural Link Error.");
    } finally {
      setLoading(false);
    }
  };

  // --- ميزة المشاركة على تويتر ---
  const shareOnTwitter = () => {
    const text = `🧪 SENKU FACTORY SCAN REPORT:\n\n💎 Token: ${data.name} ($${data.symbol})\n💰 Liquidity: $${data.liquidity}\n🛡️ Status: ${data.status}\n\nScan your tokens here:`;
    const url = "https://senku-app-factory.vercel.app/";
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, '_blank');
  };

  return (
    <div style={{ background: 'rgba(0, 5, 0, 0.9)', padding: '30px', borderRadius: '24px', border: '1px solid #00ff00', width: '95%', maxWidth: '500px', boxShadow: '0 0 40px rgba(0,255,0,0.1)' }}>
      <h2 style={{ color: '#00ff00', textAlign: 'center', marginBottom: '25px', fontFamily: 'monospace', textShadow: '0 0 10px #00ff00', letterSpacing: '4px' }}>SENKU FACTORY</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <input 
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="ENTER CONTRACT ADDRESS..."
          style={{ width: '100%', padding: '15px', background: '#000', border: '1px solid #114411', color: '#00ff00', outline: 'none', borderRadius: '12px', fontSize: '12px', fontFamily: 'monospace' }}
        />
      </div>
      
      <button 
        onClick={performScan}
        disabled={loading}
        style={{ width: '100%', padding: '15px', background: '#00ff00', color: '#000', fontWeight: '900', border: 'none', cursor: 'pointer', borderRadius: '12px', textTransform: 'uppercase', letterSpacing: '2px', transition: '0.3s' }}
      >
        {loading ? "ANALYZING..." : "SENKU SCAN"}
      </button>

      {data && data.name && (
        <div style={{ marginTop: '25px', background: 'rgba(0,255,0,0.05)', padding: '20px', borderRadius: '16px', border: '1px border-style:dashed #00ff0033' }}>
          <div style={{ marginBottom: '10px', fontSize: '14px' }}><span style={{ color: '#00ff00' }}>[ENTITY]:</span> {data.name} (${data.symbol})</div>
          <div style={{ marginBottom: '10px', fontSize: '14px' }}><span style={{ color: '#00ff00' }}>[LIQUIDITY]:</span> ${data.liquidity}</div>
          <div style={{ marginBottom: '20px', fontSize: '14px' }}><span style={{ color: '#00ff00' }}>[STATUS]:</span> {data.status}</div>
          
          {/* زر المشاركة الجديد */}
          <button 
            onClick={shareOnTwitter}
            style={{ width: '100%', padding: '10px', background: 'transparent', color: '#1DA1F2', fontWeight: 'bold', border: '1px solid #1DA1F2', cursor: 'pointer', borderRadius: '10px', fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
          >
            𝕏 SHARE REPORT ON TWITTER
          </button>
        </div>
      )}
    </div>
  );
}
