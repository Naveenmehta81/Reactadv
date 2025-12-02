import React  from 'react'
import { useState } from 'react';
import "./LoiginForm.css";



const LoiginForm = () => {
    const[input , setinput ] = useState({});
console.log(input);
    function handleinput(event ){
        let name = event.target.name ;
        let value = event.target.value;
     
        setinput(
            oldvlaues => ({
                
                    ...oldvlaues , [name ] : value  
        
            }
        ))

    }

    function handlesubmit(e){
        e.preventDefault();

        console.log(input);
        alert("form submmit")
        };

  return (
    <div>
      
        <form onSubmit={handlesubmit}>
            <h2>Enter your login credentials</h2>
            <label>Username:</label>
            <br/>
            <input     
            type = "text"
            name = 'Username'
            value = {input.Username}
            onChange={handleinput}
            />
            <br/>
            <br/>
             <label>password:</label>
             <br/>
            <input     
            type = 'password'
            name = 'Password'
            value = {input.Password}

            onChange={handleinput}
            />
            <br/>
            <br/>
            <button type='submit'>Sumbit</button>
            
                    
         </form>
    </div>
  )
}

export default LoiginForm;