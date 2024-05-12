// MyCalendar.js
import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import '../../src/calendar.css';
import dayGridPlugin from '@fullcalendar/daygrid';
// import EventCard from './event';
import EventPopup from './eventpopup';

const MyCalendar = ({ events }) => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleEventClick = (clickInfo) => {
        // Extract event details from clickInfo
        const clickedEvent = clickInfo.event;
        console.log(clickedEvent.date);

        // Set the selectedEvent state to the clicked event
        setSelectedEvent(clickedEvent);
        setIsPopupOpen(true);
    };

    const handleCloseCard = () => {
        setIsPopupOpen(false);
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
            {selectedEvent && isPopupOpen && (
                <EventPopup className="event-popup"event = {selectedEvent.extendedProps} onClose={handleCloseCard} />
                // <EventCard event={selectedEvent.extendedProps} onClose={handleCloseCard} />
            )}
        </div>
    );
};

export default MyCalendar;
