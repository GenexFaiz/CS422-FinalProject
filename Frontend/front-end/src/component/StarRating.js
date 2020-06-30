import React, {useState} from 'react';
import {FaStar} from 'react-icons/fa';

const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    return (
        <div>
            {[ ...Array(5)].map((star,i) => {
                const ratingValue = i+1;
                return (
                    <label>
                        <FaStar 
                            className="star" color={ratingValue <= (hover || rating) ? "#ffc107" : "e4e5e9"} size={30}
                            onClick={() => setRating(ratingValue)}
                            onMouseOver={() => setHover(ratingValue)}
                            onMouseOut={() => setHover(null)}
                        />
                    </label>
                )
            }
            )}
        </div>
    );

}

export default StarRating;