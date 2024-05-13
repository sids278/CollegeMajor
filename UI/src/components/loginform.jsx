import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../../src/userform.css';
import calenderImg from './calendar.png';

const UserForm = ({ onLogin }) => {
    const [useremail, setUseremail] = useState('');
    const [sid, setSid] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            useremail,
            sid
        };

        try {
            if (!useremail.endsWith('@pec.edu.in')) {
                setError('Please enter your pec email id!');
                return;
            }
            if (sid.length !== 8) {
                setError('Please enter a valid SID!');
                return;
            }

            // Perform login logic here, for demonstration purposes, I'll just call onLogin
            onLogin(sid);

            // Redirect to the calendar page
            navigate('/calendar');

            // Show a success message
            alert('Logged in successfully!');
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="login-container">
            <div className="image-container">
                <img src={calenderImg} alt="calendar" />
            </div>
            <div className='loginform-container'>
                <h1>Student Care Calendar - Login</h1>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label>Email:</label>
                        <input
                            type='email'
                            value={useremail}
                            onChange={(e) => setUseremail(e.target.value)}
                            placeholder='Enter your pec email id'
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label>SID:</label>
                        <input
                            type='text'
                            placeholder='Enter your SID'
                            value={sid}
                            onChange={(e) => setSid(e.target.value)}
                            required
                        />
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <button type='submit'>Login</button>
                        <h3>OR</h3>
                        <Link to="/register" className="register-link">
                            <button style={{ backgroundColor: "black" }}>Register</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserForm;
