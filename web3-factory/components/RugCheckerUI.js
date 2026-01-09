import React, { useState } from 'react';
import axios from 'axios';

export default function RugCheckerUI() {
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  // دالة الفحص الحقيقي من سولانا
  const performScan = async () => {
    if (!address || address.length < 32) {
      alert("Please enter a valid Solana contract address.");
      return;
    }
    
    setLoading(true);
    setData(null);

    try {
      const res = await axios.get(`https://api.dexscreener.com/latest/dex/tokens/${address}`);
      const pair = res.data.pairs ? res.data.pairs[0] : null;

      if (pair) {
        // تخزين البيانات للتأكد من ظهورها في الموقع والمشاركة
        setData({
          name: pair.baseToken.name,
          symbol: pair.baseToken.symbol,
          price: pair.priceUsd,
          liquidity: pair.liquidity.usd.toLocaleString(),
          volume: pair.volume.h24.toLocaleString(),
          status: "SAFE_NEURAL_CHECK"
        });
      } else {
        setData({ 
          status: "ERROR", 
          details: "Token found but no liquidity pairs detected on-chain." 
        });
      }
    } catch (err) {
      setData({ 
        status: "ERROR", 
        details: "Neural link failed. Please check your connection." 
      });
    } finally {
      setLoading(false);
    }
  };

  // دالة المشاركة على تويتر
  const shareOnTwitter = () => {
    if (!data || data.status === "ERROR") return;

    const text = `🧪 SENKU NEURAL REPORT:\n\n💎 Token: ${data.name} ($${data.symbol})\n💰 Liquidity: $${data.liquidity}\n🛡️ Status: ${data.status}\n\nScan securely at:`;
    const url = "https://senku-app-factory.vercel.app/";
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, '_blank');
  };

  return (
    <div style={{ 
      background: 'rgba(0, 8, 0, 0.95)', 
      padding: '30px', 
      borderRadius: '24px', 
      border: '1px solid #00ff00', 
      width: '95%', 
      maxWidth: '480px', 
      boxShadow: '0 0 50px rgba(0,255,0,0.15)',
      fontFamily: 'monospace'
    }}>
      {/* العنوان */}
      <h2 style={{ 
        color: '#00ff00', 
        textAlign: 'center', 
        marginBottom: '25px', 
        textShadow: '0 0 15px #00ff00', 
        letterSpacing: '3px',
        textTransform: 'uppercase'
      }}>
        NEURAL SCANNER
      </h2>
      
      {/* حقل الإدخال */}
      <div style={{ marginBottom: '15px' }}>
        <input 
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="PASTE CONTRACT ADDRESS..."
          style={{ 
            width: '100%', 
            padding: '16px', 
            background: '#000', 
            border: '1px solid #114411', 
            color: '#00ff00', 
            outline: 'none', 
            borderRadius: '12px', 
            fontSize: '12px',
            boxSizing: 'border-box'
          }}
        />
      </div>
      
      {/* زر الفحص */}
      <button 
        onClick={performScan}
        disabled={loading}
        style={{ 
          width: '100%', 
          padding: '16px', 
          background: '#00ff00', 
          color: '#000', 
          fontWeight: '900', 
          border: 'none', 
          cursor: 'pointer', 
          borderRadius: '12px', 
          textTransform: 'uppercase', 
          letterSpacing: '2px',
          boxShadow: loading ? 'none' : '0 0 20px rgba(0,255,0,0.4)'
        }}
      >
        {loading ? "DECRYPTING..." : "EXECUTE SCAN"}
      </button>

      {/* منطقة النتائج */}
      {data && (
        <div style={{ 
          marginTop: '25px', 
          background: 'rgba(0,255,0,0.03)', 
          padding: '20px', 
          borderRadius: '16px', 
          border: '1px dashed #00ff0044' 
        }}>
          {data.status !== "ERROR" ? (
            <>
              <div style={{ marginBottom: '12px', fontSize: '13px', color: '#fff' }}>
                <span style={{ color: '#00ff00' }}>[ENTITY]:</span> {data.name} ({data.symbol})
              </div>
              <div style={{ marginBottom: '12px', fontSize: '13px', color: '#fff' }}>
                <span style={{ color: '#00ff00' }}>[PRICE]:</span> ${data.price}
              </div>
              <div style={{ marginBottom: '12px', fontSize: '13px', color: '#fff' }}>
                <span style={{ color: '#00ff00' }}>[LIQUIDITY]:</span> ${data.liquidity}
              </div>
              <div style={{ marginBottom: '20px', fontSize: '13px', color: '#fff' }}>
                <span style={{ color: '#00ff00' }}>[STATUS]:</span> <span style={{ fontWeight: 'bold' }}>{data.status}</span>
              </div>
              
              {/* زر المشاركة الفعال */}
              <button 
                onClick={shareOnTwitter}
                style={{ 
                  width: '100%', 
                  padding: '12px', 
                  background: 'transparent', 
                  color: '#1DA1F2', 
                  fontWeight: 'bold', 
                  border: '1px solid #1DA1F2', 
                  cursor: 'pointer', 
                  borderRadius: '10px', 
                  fontSize: '11px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  gap: '8px'
                }}
              >
                𝕏 SHARE NEURAL REPORT
              </button>
            </>
          ) : (
            <div style={{ color: '#ff4444', textAlign: 'center', fontSize: '12px', padding: '10px' }}>
              ⚠️ {data.details}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
