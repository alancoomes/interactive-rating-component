import React from "react";

const Rating = () => {
  return (
    <>
      <div className="star-wrapper">
        <img src="/images/icon-star.svg" alt="" />
      </div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div className="rating-list">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
      </div>

      <button className="submit">Submit</button>
    </>
  );
};

export default Rating;
