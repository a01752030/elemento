import React, { useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { Rating } from '@mui/material';
import '../styles/ReviewForm.css'
import BotonNG from './BotonNG';

function ReviewForm() {
  const [comment, setComment] = useState('');
  const [score, setScore] = useState(0);

  const formik = useFormik({
    initialValues: {
      comment: '',
      score: 0,
    },
    onSubmit: async (values) => {
      try {
        await axios.post('/api/postReview', {
          rating: score,
          review: comment,
        });
    
        formik.resetForm();
      } catch (error) {
        console.log(error);
      }
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className='ReviewContainer'>
        <label htmlFor="score">Score</label>
        <Rating name="half-rating" defaultValue={0} precision={0.5} sx ={{
          margin: '10px'
        }}
        onChange={(event,newValue) => {
          formik.handleChange(event);
          setScore(newValue);
        }}
        
        value={score}
        />

        <label htmlFor="comment">Comment</label>
        <textarea
          id="comment"
          name="comment"
          type="text"
          className='input-C'
          onChange={(event) => {
            formik.handleChange(event);
            setComment(event.target.value);
          }}
          value={comment}
        />
        {/* <input
          id="score"
          name="score"
          type="number"
          min="1"
          max="5"
          onChange={(event) => {
            formik.handleChange(event);
            setScore(event.target.value);
          }}
          
          value={formik.values.score}
        /> */}


        <BotonNG id = "review" type = "submit" texto = "Submit"/>
        {/* <button type="submit">Submit</button> */}
      </form>
    </div>
  );
}

export default ReviewForm;