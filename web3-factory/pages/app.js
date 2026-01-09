/**
 * Senku AppFactory Main Entry
 * Component: Rug Checker Integration
 */

import React from 'react';
import RugCheckerUI from './components/RugCheckerUI';

function App() {
  return (
    <div className="senku-main-container">
      <header>
        <h1 style={{color: '#00f3ff'}}>SENKU WEB3 FACTORY</h1>
      </header>
      <main>
        {/* Integrating your new tool here */}
        <RugCheckerUI />
      </main>
      
      {/* Footer with your name */}
      <footer>
        <p>Built by Bader Alkorgli (@bedro95)</p>
      </footer>
    </div>
  );
}

export default App;
