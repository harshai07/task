import React from 'react';
import ReactDOM from 'react-dom/client';
import SmartWebCheckin from '../src/Componets/SmartWebCheckin'; // Adjust path if needed
import './index.css'; // Optional: for global styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SmartWebCheckin />
  </React.StrictMode>
);
