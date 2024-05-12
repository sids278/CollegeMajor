import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../src/userform.css';
import calenderImg from './calendar.png';

const UserForm = ({ onLogin }) => {
    const [useremail, setUseremail] = useState('');
    const [sid, setSid] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [branch, setBranch] = useState('');
    const [year, setYear] = useState('');
    const [hostel, setHostel] = useState('');
    const [hostelRoomNo, setHostelRoomNo] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const payload = {
            useremail,
            sid,
            phone_number: phoneNumber,
            branch,
            year: parseInt(year), // Parse year as integer
            hostel,
            hostel_room_no: parseInt(hostelRoomNo) // Parse hostelRoomNo as integer
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
              if (year.length !==1) {
                setError('Please enter valid year!');
              }
              if (phoneNumber.length !== 10){
                setError('Please enter a valid phone number!');
              }
              if (hostelRoomNo.length !== 3) {
                setError('Please enter a valid room no');
              }
              else{
                setError('');
              }

            const response = await fetch('http://localhost:8000/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
    
            if (response.ok) {
                // Extract the token from the API response
                const responseData = await response.json();
                const token = responseData.token;
                
                // Store the token in localStorage
                localStorage.setItem('token', token);
    
                // Trigger the onLogin callback with the student ID
                onLogin(sid);
                
                // Redirect to the calendar page
                navigate('/calendar');
                
                // Show a success message
                alert('Logged in successfully!');
            } else {
                // Handle login failure
                alert('Failed to log in. Please try again.');
            }
        } catch (error) {
            // Handle network errors or other exceptions
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        }
    };
    
    return (
        <div className = "login-container" >
            <div className = "image-container">
                <img src={calenderImg} alt="calendar" />
            </div>
            <div className='loginform-container'>
                <h1>Student Care Calendar</h1>
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
                <div className='form-group'>
                    <label>Branch:</label>
                    <input
                        type='text'
                        placeholder='Enter your Branch'
                        value={branch}
                        onChange={(e) => setBranch(e.target.value)}
                        required
                    />
                </div> 
                <div className='form-group'>
                    <label>Year:</label>
                    <input
                        type='text'
                        placeholder='Enter your Year'
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        required
                    />
                </div>
                 <div className='form-group'>
                    <label>Phone Number:</label>
                    <input
                        type='text'
                        placeholder='Enter your Phone Number'
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label>Hostel Name:</label>
                    <input
                        type='text'
                        placeholder='Enter your Hostel'
                        value={hostel}
                        onChange={(e) => setHostel(e.target.value)}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label>Hostel Room no:</label>
                    <input
                        type='text'
                        placeholder='Enter your Hostel Room No'
                        value={hostelRoomNo}
                        onChange={(e) => setHostelRoomNo(e.target.value)}
                        required
                    />
                </div>
                    <div>
                        <button type='submit'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserForm;