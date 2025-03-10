import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './components/styles.css'; 
import reportWebVitals from './reportWebVitals';  // ✅ Add this line

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();  // ✅ This will now work
