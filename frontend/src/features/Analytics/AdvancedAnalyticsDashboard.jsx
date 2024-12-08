import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

const AdvancedAnalyticsDashboard = () => {
  const [analytics, setAnalytics] = useState({ conversions: 0, retention: 0, satisfaction: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/analytics/advanced');
        const data = await response.json();
        setAnalytics(data);
      } catch (err) {
        console.error('Failed to fetch analytics:', err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const ctx = document.getElementById('analyticsChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Conversions', 'Retention', 'Satisfaction'],
        datasets: [
          {
            label: 'Advanced Metrics',
            data: [analytics.conversions, analytics.retention, analytics.satisfaction],
            backgroundColor: ['rgba(75, 192, 192, 0.2)'],
            borderColor: ['rgba(75, 192, 192, 1)'],
            borderWidth: 1,
          },
        ],
      },
    });
  }, [analytics]);

  return (
    <div className="analytics-dashboard">
      <h3>Advanced Analytics Dashboard</h3>
      <canvas id="analyticsChart" width="400" height="200"></canvas>
      <p>Conversion Rate: {analytics.conversions}%</p>
      <p>Retention Rate: {analytics.retention}%</p>
      <p>Customer Satisfaction: {analytics.satisfaction}/100</p>
    </div>
  );
};

export default AdvancedAnalyticsDashboard;