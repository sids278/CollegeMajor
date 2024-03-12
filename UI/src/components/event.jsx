import React from 'react';
import { Card, Typography } from 'antd';

const { Text } = Typography;

const Event = ({ event }) => {
    return (
        <Card title={event.title} className="event-card">
            <Text>Date: {event.date ? event.date.toLocaleDateString() : 'No Date'}</Text>
            <Text>Time: {event.date ? event.date.toLocaleTimeString() : 'No Time'}</Text>
            <p>{event.description}</p>
        </Card>
    );
};

export default Event;
