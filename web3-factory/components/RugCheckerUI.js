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
      // الاتصال بمحرك البيانات الحقيقي (DexScreener API)
      const res = await axios.get(`https://api.dexscreener.com/latest/dex/tokens/${address}`);
      const pair = res.data.pairs ? res.data.pairs[0] : null;

      if (pair) {
        setData({
          name: pair.baseToken.name + " (" + pair.baseToken.symbol + ")",
          price: "$" + pair.priceUsd,
          liquidity: "$" + pair.liquidity.usd.toLocaleString(),
          volume: "$" + pair.volume.h24.toLocaleString(),
          mCap: "$" + (pair.fdv ? pair.fdv.toLocaleString() : "N/A"),
          status: "VERIFIED_ON_CHAIN"
        });
      } else {
        setData({ status: "NO_DATA_FOUND", details: "Token exists but no active liquidity pairs found." });
      }
    } catch (err) {
      alert("Neural Link Error: Connection timed out.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ background: 'rgba(0, 20, 0, 0.8)', padding: '30px', borderRadius: '20px', border: '1px solid #00ff00', width: '90%', maxWidth: '500px', boxShadow: '0 0 20px #00ff0033' }}>
      <h2 style={{ color: '#00ff00', textAlign: 'center', marginBottom: '20px', fontFamily: 'monospace' }}>SENKU SCANNER</h2>
      
      <input 
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter Solana Contract..."
        style={{ width: '100%', padding: '12px', background: '#000', border: '1px solid #00ff00', color: '#00ff00', outline: 'none', marginBottom: '10px' }}
      />
      
      <button 
        onClick={performScan}
        disabled={loading}
        style={{ width: '100%', padding: '12px', background: '#00ff00', color: '#000', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}
      >
        {loading ? "SCANNING CORE..." : "EXECUTE SCAN"}
      </button>

      {data && (
        <div style={{ marginTop: '20px', color: '#fff', fontSize: '14px', fontFamily: 'monospace' }}>
          <div style={{ borderBottom: '1px solid #333', padding: '5px 0' }}>STATUS: <span style={{ color: '#00ff00' }}>{data.status}</span></div>
          {data.name && (
            <>
              <div style={{ borderBottom: '1px solid #333', padding: '5px 0' }}>TOKEN: {data.name}</div>
              <div style={{ borderBottom: '1px solid #333', padding: '5px 0' }}>LIQUIDITY: {data.liquidity}</div>
              <div style={{ borderBottom: '1px solid #333', padding: '5px 0' }}>MCAP: {data.mCap}</div>
              <div style={{ borderBottom: '1px solid #333', padding: '5px 0' }}>PRICE: {data.price}</div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
