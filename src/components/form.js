// form.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../src/styles.css'; // Import the CSS file

const EventForm = ({ onSubmit }) => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [date, setDate] = useState(new Date());

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, date });
        setTitle('');
        setDate(new Date());
        navigate('/')
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div className="form-field">
                <input
                    type="text"
                    placeholder="Enter event title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="input-text"
                />
            </div>
            <div className="form-field date-picker-container">
                <DatePicker
                    selected={date}
                    onChange={(date) => setDate(date)}
                    showTimeSelect
                    dateFormat="MMMM d, yyyy h:mm aa"
                />
            </div>
            <button type="submit" className="submit-button">Add Event</button>
        </form>
    );
};

export default EventForm;
