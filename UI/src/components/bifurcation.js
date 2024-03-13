import React, {useState} from "react";
import '../../src/styles.css';

const Bifurcation = () =>{
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return(
        <div>
            <p> Please select your issue :-</p>
            <form>
                <label className="form-field" style={{color:'red', fontWeight: "bold"}}>
                    <input
                    type="radio"
                    name="option"
                    value="Option A"
                    checked={selectedOption === 'Option A'}
                    onChange={handleOptionChange}
                />Emergency
                </label>
                <br />
                <label className="form-field">
                    <input
                    type="radio"
                    name="option"
                    value="Option B"
                    checked={selectedOption === 'Option B'}
                    onChange={handleOptionChange}
                />
                Interpersonal Conflicts(Family/Friends)
                </label>
                <br />
                <label className="form-field">
                    <input
                    type="radio"
                    name="option"
                    value="Option C"
                    checked={selectedOption === 'Option C'}
                    onChange={handleOptionChange}
                />
                Academic Issues
                </label>
                <br />
                <label className="form-field">
                    <input
                    type="radio"
                    name="option"
                    value="Option D"
                    checked={selectedOption === 'Option D'}
                    onChange={handleOptionChange}
                />
                Internship or Job
                </label>
                <br />
                <label className="form-field">
                    <input
                    type="radio"
                    name="option"
                    value="Option E"
                    checked={selectedOption === 'Option E'}
                    onChange={handleOptionChange}
                />
                Self Improvement
                </label>
                <br />
            </form>
        </div>
    );
};

export default Bifurcation;