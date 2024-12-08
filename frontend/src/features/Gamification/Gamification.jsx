import React, { useState, useEffect } from 'react';

const Gamification = () => {
  const [points, setPoints] = useState(0);
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    // Simulate fetching gamification data
    setPoints(150);
    setBadges(['Beginner', 'Pro']);
  }, []);

  return (
    <div className="gamification">
      <h3>Gamification</h3>
      <p>Points: {points}</p>
      <div>
        <h4>Badges:</h4>
        <ul>
          {badges.map((badge, index) => (
            <li key={index}>{badge}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Gamification;