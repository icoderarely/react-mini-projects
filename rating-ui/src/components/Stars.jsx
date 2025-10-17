import { useState } from "react";

const Stars = () => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const feedbackMessages = ["Terrible", "Poor", "Fair", "Good", "Excellent"];
  return (
    <>
      <div className="stars">
        {stars.map((star) => (
          <span
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            key={star}
            // className="star"
            className={`star ${star <= (hover || rating) ? "active" : ""}`}
          >{`\u2605`}</span>
        ))}
      </div>
      {rating > 0 && <p className="feedback">{feedbackMessages[rating - 1]}</p>}
    </>
  );
};

export default Stars;
