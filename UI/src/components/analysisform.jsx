import React, { useState } from 'react';
import '../../src/styles.css';
import Bifurcation from './bifurcation';

const AnalysisForm = () => {
    const [issue, setIssue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Call the onSubmit function passed as a prop with the issue state value
        
    };

    return (
        <form onSubmit={handleSubmit} className='form-container'>
            <Bifurcation />
            <br />
            <div className='form-field'>
                <input
                    type='text'
                    placeholder='Describe your issue'
                    value={issue}
                    onChange={(e) => setIssue(e.target.value)}
                    className='input-text'
                />
            </div>
            <div className='form-field'>
                <button type='submit'>Submit</button>
            </div>
        </form>
    );
};

export default AnalysisForm;
