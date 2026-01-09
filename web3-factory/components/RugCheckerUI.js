/**
 * Senku Rug Checker UI Component
 * Theme: Blue/Green Neon - Snow Integrated
 * Developed by: Bader Alkorgli (bedro95)
 */

import React, { useState } from 'react';

const RugCheckerUI = () => {
  const [inputAddress, setInputAddress] = useState('');
  const [scanResult, setScanResult] = useState(null);

  const startAnalysis = () => {
    // This will trigger the logic we wrote in rugScanner.js
    setScanResult({ status: 'Analyzing', message: 'Scanning Solana Network...' });
  };

  return (
    <div style={styles.neonCard}>
      <h1 style={styles.title}>SENKU AGENT - RUG CHECKER</h1>
      <p style={styles.subtitle}>Global Token Analysis System</p>
      
      <div style={styles.inputContainer}>
        <input 
          style={styles.neonInput}
          placeholder="Paste Solana Mint Address..."
          onChange={(e) => setInputAddress(e.target.value)}
        />
        <button onClick={startAnalysis} style={styles.neonButton}>
          START SCAN
        </button>
      </div>

      {scanResult && (
        <div style={styles.resultBox}>
          <p style={styles.statusText}>{scanResult.message}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  neonCard: {
    background: 'rgba(0, 10, 20, 0.9)',
    border: '2px solid #00f3ff', // Neon Blue
    boxShadow: '0 0 15px #00f3ff, inset 0 0 10px #00f3ff',
    padding: '30px',
    borderRadius: '15px',
    color: '#fff',
    maxWidth: '500px',
    margin: '20px auto',
    textAlign: 'center'
  },
  title: {
    color: '#00ff00', // Neon Green
    textShadow: '0 0 8px #00ff00',
    fontSize: '22px'
  },
  subtitle: {
    color: '#00f3ff',
    fontSize: '12px',
    letterSpacing: '2px',
    marginBottom: '20px'
  },
  neonInput: {
    width: '100%',
    padding: '12px',
    background: 'transparent',
    border: '1px solid #00f3ff',
    color: '#fff',
    borderRadius: '5px',
    marginBottom: '10px'
  },
  neonButton: {
    width: '100%',
    padding: '12px',
    background: '#00f3ff',
    color: '#000',
    border: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 0 10px #00f3ff'
  },
  resultBox: {
    marginTop: '20px',
    padding: '10px',
    borderTop: '1px solid #00ff00'
  }
};

export default RugCheckerUI;
