import React from 'react'
import TestimonialsCards from './TestimonilaCards';
import { AiFillCaretLeft  ,  AiFillCaretRight} from "react-icons/ai";
import './Testimonilas.css'
import { useState } from 'react';


 function Testimonials(props)  {
    let Reviews = props.Reviews ;
    const[index , setIndex] = useState(0);
    
 function lefthandler(){
         if(index - 1  < 0 ){
            setIndex(Reviews.length - 1 );
         }else{
            setIndex(index - 1)
         }
 }

 function righthandler(){
            if(index + 1  >= Reviews.length){
                setIndex(0);
            }else{
                setIndex(index +1);
            }
 }

function handlerandom(){
     let randomindex =     Math.floor( (Math.random()*Reviews.length)) ;
     setIndex(randomindex);
} 
  return (
    <div>
        <TestimonialsCards Review ={Reviews[index]} />  
        {/* yha dekha na review index nhi reviews index hai */}

         <div className="slider">
                   <button onClick={lefthandler}><AiFillCaretLeft/></button>
                    <button onClick={righthandler}><AiFillCaretRight/></button>
            </div>
           <div>
            <button className="button" onClick={handlerandom}>
                Surprise me 
            </button>
           </div>
       
        
    </div>
  )
 

}

export default Testimonials ;