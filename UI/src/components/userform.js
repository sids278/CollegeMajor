import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import '../../src/styles2.css';


const AnalysisForm = ({ onLogin }) => {
    const [name, setName] = useState('');
    const [studentid, setStudentid] = useState('');
    const [branch, setBranch] = useState('');
    const [year, setYear] = useState('');
    const [phoneno, setPhoneno] = useState('');
    const [hostel, setHostel] = useState('');
    const [room, setRoom] = useState('');
    const navigate=useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can perform login logic, like checking credentials
        // For demo purposes, let's assume the login is successful if the student ID matches the password
        if (studentid.trim() !== '') {
            // Trigger the onLogin callback with the student ID
            onLogin(studentid);
            // Redirect to the calendar page
            navigate('/calendar');
        } else {
            // Handle incorrect login, such as displaying an error message
            alert('Please enter your student ID.');
        }
    };

    return (
       <>
        <h1 style={{ marginBottom: '30px', textAlign: 'center', fontSize: '60px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Student Care Calendar</h1>


       <br></br>
        <br></br>
            <form onSubmit={handleSubmit} className='form-container'>
                <div className='form-field'>
                    <input
                        type='text'
                        placeholder='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='input-text'
                    />
                </div>
                <div className='form-field'>
                    <input
                        type='text'
                        placeholder='SID'
                        value={studentid}
                        onChange={(e) => setStudentid(e.target.value)}
                        className='input-text'
                    />
                </div>
                <div className='form-field'>
                    <input
                        type='text'
                        placeholder='Branch'
                        value={branch}
                        onChange={(e) => setBranch(e.target.value)}
                        className='input-text'
                    />
                </div>
                <div className='form-field'>
                    <input
                        type='number'
                        placeholder='Year'
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        className='input-text'
                    />
                </div>
                <div className='form-field'>
                    <input
                        type='text'
                        placeholder='Phone Number'
                        value={phoneno}
                        onChange={(e) => setPhoneno(e.target.value)}
                        className='input-text'
                    />
                </div>
                <div className='form-field'>
                    <input
                        type='text'
                        placeholder='Hostel'
                        value={hostel}
                        onChange={(e) => setHostel(e.target.value)}
                        className='input-text'
                    />
                </div>
                <div className='form-field'>
                    <input
                        type='text'
                        placeholder='Hostel Room No'
                        value={room}
                        onChange={(e) => setRoom(e.target.value)}
                        className='input-text'
                    />
                </div>
                <div className='form-field'>
                    <button type='submit'>Login</button>
                </div>
            </form>
       </>
    );
};

export default AnalysisForm;
