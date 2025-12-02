import React from 'react'
import { useState } from 'react';
import './Sign.css';

 const Signin = () => {
    const[formData , setFormData] = useState({ Email : "" , password : "" , address : "" , city : "" 
       , countrys :"" , zip :""  })
    console.log(formData);

    function handelformData(event){
            const{name , value , type } = event.target
            setFormData(
                prevdata =>{
                    return{

                    ...prevdata , [name] : value
                    }
                }

            )
    }

    function handleform(event){
        event.preventDefault(); 
        console.log(formData);
        alert("sign in ")

    }

  return (
    <div   className="signin-container">
        <h1>Sign in </h1>
        <form onSubmit={handleform}>
            
            <input
            placeholder='Enter your email'
            type = 'email'
            name='Email'
            value={formData.Email}
            onChange={handelformData}
            />
             <input
            placeholder='password'
            type = 'password'
            name='password'
            value={formData.password}
            onChange={handelformData}
            />
            <input
            placeholder='Address'
            type = 'text'
            name='address'
            value={formData.address}
            onChange={handelformData}
            />
            <input
            placeholder='city'
            type = 'text'
            name='city'
            value={formData.city}
            onChange={handelformData}
            />
            <select name='countrys'  value={formData.countrys}  onChange={handelformData}>
                 <option value = 'ambala'>ambala</option>
                <option value = 'indai'>india</option>
                <option value = 'us'>Us</option>
                <option value = 'uk'>uk</option>
                <option value = 'russia'>russia</option>
                <option value = 'korea'>korea</option>
                <option value = 'surat'>india</option>
             </select>
              <input
            placeholder='ZIP'
            type = 'text'
            name='zip'
            value={formData.zip}
            onChange={handelformData}
            />
            <button type='submit' >Sign in </button>
        </form>
    </div>
  )
}


export default Signin;
