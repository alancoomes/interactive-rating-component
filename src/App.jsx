import { useState } from "react";
import Rating from "./Rating";
import ThankYou from "./ThankYou";

function App() {
  const [rating, setRating] = useState(0);
  const [submit, setSubmit] = useState(false);

  const onRating = (rateNum) => {
    setRating(rateNum);
  };

  const onSubmitRating = (bool) => {
    setSubmit(bool);
  };

  return (
    <div>
      {submit ? (
        <ThankYou rating={rating} />
      ) : (
        <Rating onRating={onRating} onSubmitRating={onSubmitRating} />
      )}
    </div>
  );
}

export default App;
