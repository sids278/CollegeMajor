import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { useNavigate } from 'react-router-dom';

const MyCalendar = ({ events }) => {
    const navigate = useNavigate();

    const handleEventSubmit = (event) => {
        events.push(event);
        navigate('/calendar');
    };

    const calendarEvents = events.map((event) => ({
        ...event,
        title: `${event.title} - ${event.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`
    }));

    return (
        <div className="calendar-container">
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                weekends={true}
                events={calendarEvents}
            />
        </div>
    );
};

export default MyCalendar;
