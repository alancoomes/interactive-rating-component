import React from "react";

const ThankYou = () => {
  return (
    <>
      <div className="icon-wrapper">
        <img src="/images/illustration-thank-you.svg" alt="" />
      </div>
      <div>
        You selected <span className="rating">4</span> out of 5
      </div>

      <h2>Thank you!</h2>

      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </>
  );
};

export default ThankYou;
