import React from "react";
import "./Rating.css";

const Rating = ({ onRating, onSubmitRating }) => {
  return (
    <div className="rating-wrapper">
      <div className="star-wrapper">
        <img src="/images/icon-star.svg" alt="" />
      </div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div className="rating-list">
        <button onClick={() => onRating(1)}>1</button>
        <button onClick={() => onRating(2)}>2</button>
        <button onClick={() => onRating(3)}>3</button>
        <button onClick={() => onRating(4)}>4</button>
        <button onClick={() => onRating(5)}>5</button>
      </div>

      <button onClick={() => onSubmitRating(true)} className="submit">
        Submit
      </button>
    </div>
  );
};

export default Rating;
