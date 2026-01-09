import React from 'react';
import RugCheckerUI from '../components/RugCheckerUI'; // بدون امتداد في النهاية

export default function Home() {
  return (
    <div style={{ background: '#000', minHeight: '100vh' }}>
      <RugCheckerUI />
    </div>
  );
}

