import React from 'react';
import { createRoot } from 'react-dom/client';

function FamTreePrototyp() {
  return (
    <div style={{padding:20, fontFamily:'sans-serif'}}>
      <h1>Familienstammbaum Prototyp</h1>
      <p>Hier erscheint dein interaktiver Stammbaum.</p>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<FamTreePrototyp />);