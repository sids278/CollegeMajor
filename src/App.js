import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AddEventButton from './components/button';
import EventForm from './components/form';
import MyCalendar from './components/fullcalendar';

const App = () => {
  const [events, setEvents] = useState([]);

  const handleEventSubmit = (event) => {
    setEvents([...events, event]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<>
          <AddEventButton onClick={() => window.location.href = "/event-form"} />
          <MyCalendar events={events} />
        </>} />
        <Route path="/event-form" element={<EventForm onSubmit={handleEventSubmit} />} />
      </Routes>
    </Router>
  );
};



export default App;
