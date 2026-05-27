import { useState } from "react";
import Modal from "./Modal";

const Ratings = ({ heading }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (rating === 0) return;
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setRating(0);
  };

  const feedBackMessages = [
    "Very Poor",
    "Poor",
    "Average",
    "Good",
    "Excellent",
  ];
  return (
    <div className="rating-container">
      {submitted && <Modal onClose={handleClose} />}
      <h2>{heading}</h2>
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            key={star}
            className={`star ${star <= (hover || rating) ? "active" : ""}`}
          >
            &#9733;
          </span>
        ))}
      </div>
      {rating > 0 && (
        <div className="feedback">
          <p>{feedBackMessages[rating - 1]}</p>
        </div>
      )}
      <button
        className="submit-btn"
        onClick={() => handleSubmit()}
        disabled={rating === 0 || submitted}
      >
        Submit
      </button>
    </div>
  );
};
export default Ratings;
