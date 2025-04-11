import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

export default function StarRating({stars = 5}) {

    const [rating, setRating] = useState(0)
    const [hover, sethover] = useState(0)

    function handleclick(currindex) {           // getting current index on which user clicked
        setRating(currindex)
    }

    function handleMouseEnter(currindex) {      // getting current index on which user hover
        sethover(currindex)
    }

    function handleMouseLeave() {               //  when user leave the hover
        sethover(rating)
    }

    return (
        <>
            <h1 style={{
                textAlign: "center",
                padding: "20px"
            }}>
                Star Rating
            </h1>
            <div className="container">
                {
                    [...Array(stars)].map((_, index) => {
                        index += 1
                        
                        return (
                            <FaStar 
                                key={index}
                                className={index <= (hover || rating) ? "active" : "inactive"}
                                onClick={() => handleclick(index)}
                                onMouseMove={() => handleMouseEnter(index)}
                                onMouseLeave={() => handleMouseLeave()}
                                size={40}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}