import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import '/Users/siddharthsharma/Desktop/MAJOR/calendar/src/styles.css'; // Import the CSS file for styling

const EventForm = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState(new Date());
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, date });
        navigate('/');
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="input-field">
                    <input
                        type="text"
                        placeholder="Enter event title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="input-field">
                    <DatePicker
                        selected={date}
                        onChange={(date) => setDate(date)}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="MMMM d, yyyy h:mm aa"
                        className="date-picker"
                    />
                </div>
                <button type="submit" className="submit-button">Confirm</button>
            </form>
        </div>
    );
};

export default EventForm;
