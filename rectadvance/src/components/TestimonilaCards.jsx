import React  from "react"; 
import { FaQuoteLeft ,FaQuoteRight } from "react-icons/fa";

import './TestimonilaCards.css'

function TestimonialsCards(props){
      let Review = props.Review ;
    
    if (!Review) {
        return null;
    }
    return(
        <div className="Card">
            <div className="image">
                <img src= {Review.image} />
            </div>
            <div className="name">
                <p>{Review.name}</p>
            </div>
            <div className="title">
                <p>{Review.job}</p>
            </div>
            <div>
                <FaQuoteLeft/>
            </div>
            <div className="text">
                <p>{Review.text}</p>
            </div>
            <div>
                <FaQuoteRight/>
            </div>
           
        </div>
    )
}


export default TestimonialsCards;