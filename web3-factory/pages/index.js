import React, { useEffect, useState } from 'react';
import Head from 'next/head';
// تصحيح المسار ليكون متوافقاً مع هيكل المجلدات
import RugCheckerUI from '../components/RugCheckerUI'; 

export default function Home() {
  const [flakes, setFlakes] = useState([]);

  useEffect(() => {
    const newFlakes = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100 + '%',
      duration: Math.random() * 3 + 2 + 's',
    }));
    setFlakes(newFlakes);
  }, []);

  return (
    <div style={{ background: '#000', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      <Head>
        <title>Senku AppFactory</title>
      </Head>

      {/* Snow System (Original Code 1) */}
      <div style={{ position: 'absolute', width: '100%', height: '100%', pointerEvents: 'none' }}>
        {flakes.map(f => (
          <div key={f.id} style={{
            position: 'absolute',
            left: f.left,
            top: '-10px',
            width: '4px',
            height: '4px',
            background: '#fff',
            borderRadius: '50%',
            animation: `fall ${f.duration} linear infinite`
          }} />
        ))}
      </div>

      <main style={{ position: 'relative', zIndex: 10, display: 'flex', justifyContent: 'center', paddingTop: '50px' }}>
        <RugCheckerUI />
      </main>

      <style jsx global>{`
        @keyframes fall {
          to { transform: translateY(100vh); }
        }
      `}</style>
    </div>
  );
}
