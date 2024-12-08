import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AdvancedAnalyticsDashboard from './features/Analytics/AdvancedAnalyticsDashboard';
import WorkflowBuilder from './features/Workflows/WorkflowBuilder';
import FraudDetectionDashboard from './features/FraudDetection/FraudDetectionDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analytics" element={<AdvancedAnalyticsDashboard />} />
        <Route path="/workflows" element={<WorkflowBuilder />} />
        <Route path="/fraud-detection" element={<FraudDetectionDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;