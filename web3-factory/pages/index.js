/**
 * Senku AppFactory - Main Entry Page
 * Developed by: Bader Alkorgli (bedro95)
 * Features: Snow System, Interactive UI, Neon Theme
 */

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import RugCheckerUI from '../components/RugCheckerUI';

export default function Home() {
  // Logic for the Snow System (Original Code 1)
  const [flakes, setFlakes] = useState([]);

  useEffect(() => {
    const flakeCount = 50;
    const newFlakes = Array.from({ length: flakeCount }).map((_, i) => ({
      id: i,
      left: Math.random() * 100 + '%',
      animationDuration: Math.random() * 3 + 2 + 's',
      opacity: Math.random(),
    }));
    setFlakes(newFlakes);
  }, []);

  return (
    <div style={styles.container}>
      <Head>
        <title>Senku AppFactory | Rug Checker</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Snow Particles Layer */}
      <div style={styles.snowLayer}>
        {flakes.map((flake) => (
          <div
            key={flake.id}
            style={{
              ...styles.snowflake,
              left: flake.left,
              animationDuration: flake.animationDuration,
              opacity: flake.opacity,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <main style={styles.mainContent}>
        <div style={styles.neonGlow}>
           <RugCheckerUI />
        </div>
      </main>

      {/* Footer Branding */}
      <footer style={styles.footer}>
        <p>Managed by <span>Bader Alkorgli</span> | bedro95</p>
      </footer>

      <style jsx global>{`
        body { margin: 0; padding: 0; background: #000; overflow-x: hidden; }
        @keyframes fall {
          0% { transform: translateY(-10vh); }
          100% { transform: translateY(110vh); }
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    position: 'relative',
    background: 'radial-gradient(circle at center, #001a1a 0%, #000 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  snowLayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 1,
  },
  snowflake: {
    position: 'absolute',
    top: '-10px',
    width: '4px',
    height: '4px',
    background: '#fff',
    borderRadius: '50%',
    filter: 'blur(1px)',
    animationName: 'fall',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
  },
  mainContent: {
    zIndex: 10,
    width: '90%',
    maxWidth: '600px',
  },
  neonGlow: {
    boxShadow: '0 0 50px rgba(0, 243, 255, 0.2)',
    borderRadius: '20px',
  },
  footer: {
    position: 'fixed',
    bottom: '20px',
    color: 'rgba(255,255,255,0.5)',
    fontSize: '12px',
    letterSpacing: '1px',
    zIndex: 10,
  }
};
