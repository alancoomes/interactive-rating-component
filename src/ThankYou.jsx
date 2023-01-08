import React from "react";
import "./ThankYou.css";

const ThankYou = () => {
  const rating = 4;

  return (
    <div className="thankyou-wrapper">
      <div className="icon-wrapper">
        <img src="/images/illustration-thank-you.svg" alt="" />
      </div>
      <div className="rating-display">You selected {rating} out of 5</div>

      <h1>Thank you!</h1>

      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

export default ThankYou;
