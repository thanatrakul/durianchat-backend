import React, { useEffect, useState } from 'react';

const FraudDetectionDashboard = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/fraud-detection');
        const data = await response.json();
        setAlerts(data);
      } catch (err) {
        console.error('Failed to fetch fraud alerts:', err);
      }
    };

    fetchAlerts();
  }, []);

  return (
    <div className="fraud-detection-dashboard">
      <h3>Fraud Detection Dashboard</h3>
      <ul>
        {alerts.map((alert, index) => (
          <li key={index}>
            <strong>Type:</strong> {alert.type} | <strong>Details:</strong> {alert.details}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FraudDetectionDashboard;