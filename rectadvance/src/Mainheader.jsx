import React from 'react'
import { Outlet } from 'react-router-dom';


function Mainheader ()  {
  
     return (
    <div>Home page is this :
        <Outlet/>  
    </div>
    
  
  )
}

export default Mainheader;