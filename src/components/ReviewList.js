import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Review = ({ review }) => {
  return (
    <div>
      <h3>{review.name}</h3>
      <p>Score: {review.score}</p>
      <p>{review.comment}</p>
      <p>Date: {new Date(review.date).toLocaleDateString()}</p>
    </div>
  );
};

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/reviews')
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.map((review) => (
        <Review key={review._id} review={review} />
      ))}
    </div>
  );
};

export default ReviewList;