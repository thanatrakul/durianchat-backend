import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

const PerformanceDashboard = () => {
  const [metrics, setMetrics] = useState({ cpu: 0, memory: 0, requests: 0 });

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const response = await fetch('http://localhost:8080/api/monitoring/metrics');
        const data = await response.json();
        setMetrics(data);
      } catch (err) {
        console.error('Failed to fetch metrics:', err);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = document.getElementById('metricsChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['CPU', 'Memory', 'Requests'],
        datasets: [
          {
            label: 'System Metrics',
            data: [metrics.cpu, metrics.memory, metrics.requests],
            backgroundColor: ['rgba(75, 192, 192, 0.2)'],
            borderColor: ['rgba(75, 192, 192, 1)'],
            borderWidth: 1,
          },
        ],
      },
    });
  }, [metrics]);

  return (
    <div className="performance-dashboard">
      <h3>Performance Monitoring</h3>
      <canvas id="metricsChart" width="400" height="200"></canvas>
      <p>CPU Usage: {metrics.cpu}%</p>
      <p>Memory Usage: {metrics.memory} MB</p>
      <p>Requests: {metrics.requests}</p>
    </div>
  );
};

export default PerformanceDashboard;