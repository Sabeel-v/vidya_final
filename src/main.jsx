import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './assets/css/style.css'; // Add this if there is a custom style sheet, or tailwind output. Wait, their css file might have tailwind directives. Let's see what style.css has. Wait, I should also import tailwindcss if it was built.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
