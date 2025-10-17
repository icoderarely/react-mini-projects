import Stars from "./Stars";

const Rating = ({ heading = "Rate your experience!" }) => {
  return (
    <div className="rating-container">
      <h2>{heading}</h2>
      <Stars />
    </div>
  );
};

export default Rating;
