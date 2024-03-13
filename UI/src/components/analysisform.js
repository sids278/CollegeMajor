import React, { useState } from 'react';
import '../../src/styles.css';
import Bifurcation from './bifurcation';

const AnalysisForm = ({onSubmit}) => {
    const [name, setName] = useState('');
    const [studentid, setStudentid] = useState('');
    const [branch, setBranch] = useState('');
    const [year, setYear] = useState();
    const [phoneno, setPhoneno] = useState('');
    const [hostel, setHostel] = useState('');
    const [room, setRoom] = useState('');
    const [issue, setIssue] = useState('');

    return (
        <form onSubmit={onSubmit} className='form-container'>
            <div className='form-field'>
                <input 
                type='text'
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='input-text'/>
            </div>
            <div className='form-field'>
                <input 
                type='text'
                placeholder='SID'
                value={studentid}
                onChange={(e) => setStudentid(e.target.value)}
                className='input-text'/>
            </div>
            <div className='form-field'>
                <input 
                type='text'
                placeholder='Branch'
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                className='input-text'/>
            </div>
            <div className='form-field'>
                <input 
                type='number'
                placeholder='Year'
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className='input-text'/>
            </div>
            <div className='form-field'>
                <input 
                type='text'
                placeholder='Phone Number'
                value={phoneno}
                onChange={(e) => setPhoneno(e.target.value)}
                className='input-text'/>
            </div>
            <div className='form-field'>
                <input 
                type='text'
                placeholder='Hostel'
                value={hostel}
                onChange={(e) => setHostel(e.target.value)}
                className='input-text'/>
            </div>
            <div className='form-field'>
                <input 
                type='text'
                placeholder='Hostel Room No'
                value={room}
                onChange={(e) => setRoom(e.target.value)}
                className='input-text'/>
            </div>
            <Bifurcation />
            <br />
            <div className='form-field'>
                <input 
                type='text'
                placeholder='Describe your issue'
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
                className='input-text'/>
            </div>
        </form>
    );
};

export default AnalysisForm;