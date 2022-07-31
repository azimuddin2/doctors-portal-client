import React from 'react';
import useReview from '../../hooks/useReview';
import Review from './Review';


const Reviews = () => {
    const [reviews] = useReview([]);
    return (
        <div>
            {
                reviews.map(review => <Review
                    key={review._id}
                    review={review}
                ></Review>)
            }
            
        </div>
    );
};

export default Reviews;