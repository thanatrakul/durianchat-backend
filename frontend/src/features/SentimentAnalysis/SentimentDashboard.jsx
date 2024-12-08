import React, { useEffect, useState } from 'react';
import { fetchSentiments, fetchConflicts, fetchSentimentForecast, fetchFeedback } from './services';

const SentimentDashboard = () => {
    const [sentiments, setSentiments] = useState({});
    const [conflicts, setConflicts] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        fetchSentiments().then(setSentiments);
        fetchConflicts().then(setConflicts);
        fetchSentimentForecast().then(setForecast);
        fetchFeedback().then(setFeedback);
    }, []);

    return (
        <div className="sentiment-dashboard">
            <h3>Sentiment Analysis</h3>
            <div>
                <h4>Sentiment Overview</h4>
                <p>Positive: {sentiments.positive}%</p>
                <p>Neutral: {sentiments.neutral}%</p>
                <p>Negative: {sentiments.negative}%</p>
            </div>
            <div>
                <h4>Conflicts Detected</h4>
                <ul>
                    {conflicts.map((conflict, index) => (
                        <li key={index}>
                            User: {conflict.user}, Issue: {conflict.issue}, Sentiment: {conflict.sentiment}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h4>Sentiment Forecast</h4>
                <ul>
                    {forecast.map((item, index) => (
                        <li key={index}>
                            {item.description}: {item.probability}%
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h4>Feedback</h4>
                <ul>
                    {feedback.map((item, index) => (
                        <li key={index}>
                            {item.comment} - {item.rating}/5
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SentimentDashboard;