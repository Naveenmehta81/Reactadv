import React, { useState } from 'react';
// import './Sign.css';

const Signin = () => {
    // 1. Define initial state so we can re-use it for resetting later
    const initialState = { 
        Email: "", 
        password: "", 
        address: "", 
        city: "", 
        countrys: "india", // specific default matches option value 
        zip: "" 
    };

    const [formData, setFormData] = useState(initialState);
    const [data, setdata] = useState([]);

    function handelformData(event) {
        const { name, value } = event.target;
        setFormData(prevdata => {
            return {
                ...prevdata, [name]: value
            }
        });
    }

    function handleform(event) {
        event.preventDefault();
        
        // Check if email is not empty
        if (formData.Email.trim() !== '') {
            // Add to list
            setdata([...data, formData]);
            
            // FIX: Reset to the OBJECT, not a string ("")
            setFormData(initialState); 
        }
    }

    return (
        <div className="signin-container">
            <h1>Sign in</h1>
            <form onSubmit={handleform}>
                <input
                    placeholder='Enter your email'
                    type='email'
                    name='Email'
                    value={formData.Email}
                    onChange={handelformData}
                />
                <input
                    placeholder='password'
                    type='password'
                    name='password'
                    value={formData.password}
                    onChange={handelformData}
                />
                <input
                    placeholder='Address'
                    type='text'
                    name='address'
                    value={formData.address}
                    onChange={handelformData}
                />
                <input
                    placeholder='city'
                    type='text'
                    name='city'
                    value={formData.city}
                    onChange={handelformData}
                />
                <select name='countrys' value={formData.countrys} onChange={handelformData}>
                    <option value='ambala'>ambala</option>
                    <option value='india'>india</option>
                    <option value='us'>Us</option>
                    <option value='uk'>uk</option>
                    <option value='russia'>russia</option>
                    <option value='korea'>korea</option>
                    <option value='surat'>india</option>
                </select>
                <input
                    placeholder='ZIP'
                    type='text'
                    name='zip'
                    value={formData.zip}
                    onChange={handelformData}
                />
                <button type='submit'>Sign in</button>
            </form>

            {/* Display Data Area */}
            <div>
                {/* FIX: Removed the curly braces { } inside the map function */}
                {data.map((item, index) => (
                    <div key={index} style={{ border: "1px solid grey", margin: "10px", padding: "10px" }}>
                        <p><strong>Email:</strong> {item.Email}</p>
                        <p><strong>City:</strong> {item.city}</p>
                        <p><strong>Country:</strong> {item.countrys}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Signin;