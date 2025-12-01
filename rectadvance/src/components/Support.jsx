import React from 'react'
import { useNavigate } from 'react-router-dom';

function Support () {
  const navigate = useNavigate();
  function handleclick(){
    navigate("/about")
  }
  
  return (
    <div>
           <div>Support tech here </div>
         <button onClick={handleclick}>click to go home </button>

    </div>
  )
}

export default Support;