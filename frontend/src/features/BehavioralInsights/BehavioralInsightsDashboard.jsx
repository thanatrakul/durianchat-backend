import React, { useEffect, useState } from 'react';
import { fetchJourneyData, fetchBehavioralData, fetchPredictions, fetchUserAnalytics } from './services';

const BehavioralInsightsDashboard = () => {
    const [journeys, setJourneys] = useState([]);
    const [behaviors, setBehaviors] = useState([]);
    const [predictions, setPredictions] = useState([]);
    const [analytics, setAnalytics] = useState([]);

    useEffect(() => {
        fetchJourneyData().then(setJourneys);
        fetchBehavioralData().then(setBehaviors);
        fetchPredictions().then(setPredictions);
        fetchUserAnalytics().then(setAnalytics);
    }, []);

    return (
        <div className="behavioral-insights-dashboard">
            <h3>Behavioral Insights & Analytics</h3>
            <div>
                <h4>Customer Journey</h4>
                <ul>
                    {journeys.map((journey, index) => (
                        <li key={index}>
                            <strong>{journey.stage}:</strong> {journey.description}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h4>Behavioral Tracking</h4>
                <ul>
                    {behaviors.map((behavior, index) => (
                        <li key={index}>
                            User: {behavior.user}, Action: {behavior.action}, Time: {behavior.time}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h4>Predictive Analytics</h4>
                <ul>
                    {predictions.map((prediction, index) => (
                        <li key={index}>
                            {prediction.description}: {prediction.probability}%
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h4>User Analytics</h4>
                <ul>
                    {analytics.map((data, index) => (
                        <li key={index}>
                            User: {data.user}, Age: {data.age}, Interests: {data.interests.join(', ')}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default BehavioralInsightsDashboard;