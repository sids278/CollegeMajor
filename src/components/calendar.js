// MyCalendar.js
import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import EventCard from './event';

const MyCalendar = ({ events }) => {
    const [selectedEvent, setSelectedEvent] = useState(null);

    const handleEventClick = (clickInfo) => {
        // Extract event details from clickInfo
        const clickedEvent = clickInfo.event;
        console.log(clickedEvent.title)

        // Set the selectedEvent state to the clicked event
        setSelectedEvent(clickedEvent);
    };

    const handleCloseCard = () => {
        // Clear the selectedEvent state when closing the card
        setSelectedEvent(null);
    };

    return (
        <div className="calendar-container">
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                weekends={true}
                events={events}
                eventClick={handleEventClick}
            />
            {selectedEvent && (
                <EventCard event={selectedEvent.extendedProps} onClose={handleCloseCard} />
            )}
        </div>
    );
};

export default MyCalendar;
