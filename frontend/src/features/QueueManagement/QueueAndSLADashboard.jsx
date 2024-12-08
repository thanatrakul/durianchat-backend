import React, { useEffect, useState } from 'react';
import { fetchQueueData, fetchSLAStatus } from './services';

const QueueAndSLADashboard = () => {
    const [queue, setQueue] = useState([]);
    const [slaStatus, setSLAStatus] = useState([]);

    useEffect(() => {
        fetchQueueData().then(setQueue);
        fetchSLAStatus().then(setSLAStatus);
    }, []);

    return (
        <div className="queue-sla-dashboard">
            <h3>Chat Queue and SLA Tracking</h3>
            <div>
                <h4>Current Chat Queue</h4>
                <ul>
                    {queue.map((chat, index) => (
                        <li key={index}>
                            {chat.customerName} - {chat.status}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h4>SLA Status</h4>
                <ul>
                    {slaStatus.map((item, index) => (
                        <li key={index}>
                            Case: {item.case}, Response Time: {item.responseTime} mins, Status: {item.status}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default QueueAndSLADashboard;