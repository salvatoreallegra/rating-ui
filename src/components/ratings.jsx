import { useState } from "react";

const Ratings = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const feedBackMessages = [
    "Very Poor",
    "Poor",
    "Average",
    "Good",
    "Excellent",
  ];
  return (
    <div className="rating-container">
      <h2>Rate your experience</h2>
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
    </div>
  );
};
export default Ratings;
