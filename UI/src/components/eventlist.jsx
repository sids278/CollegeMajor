import React from 'react';
import { List } from 'antd';
import Event from './event';

const EventList = ({ events }) => {
    return (
        <List
            dataSource={events}
            renderItem={(event) => (
                <List.Item>
                    <Event event={event} />
                </List.Item>
            )}
        />
    );
};

export default EventList;
