import React  from "react";
import  Testimonials  from "./Testimonials";
import Reviews from '../Data'    
import './Card.css'




console.log("in cards " );
console.log(Reviews );

function Details(){
    return(
        <div className=" container">
            <h1>OUR Testimonials</h1>
            <div className="line"></div>
            <div className="tesimonial">
                <Testimonials Reviews ={Reviews}/>
            </div>
        </div>
    )
         
    
}


export default Details ; 