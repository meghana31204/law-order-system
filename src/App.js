import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ReportCrime from './pages/ReportCrime';
import './components/styles.css';  
import ApplyLicensePermit from "./pages/ApplyLicensePermit";
import PublicNoticesAlerts from "./pages/PublicNoticesAlerts";  // Fixed import name

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/report-crime" element={<ReportCrime />} />
          <Route path="/license-permit" element={<ApplyLicensePermit />} />
          <Route path="/public-notices" element={<PublicNoticesAlerts />} /> {/* Fixed path */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
