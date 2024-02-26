import { IoIosStar } from "react-icons/io";
import { IoStarOutline } from "react-icons/io5";
import { IoCheckmark } from "react-icons/io5";

const Second = () => {
  const renderStars = (stars) => {
    const yellowStars = [];
    const fullStars = Math.floor(stars);
    const hasHalfStar = stars % 1 > 0;

    // Render full stars
    for (let i = 0; i < fullStars; i++) {
      yellowStars.push(
        <span
          key={i}
          className="star"
          style={{
            color: "#ffb80f",
          }}
        >
          <IoIosStar />
        </span>
      );
    }

    // Render half star if necessary
    if (hasHalfStar) {
      yellowStars.push(
        <span
          key="half"
          className="star"
          style={{
            color: "#ffb80f",
          }}
        >
          <IoStarOutline />
        </span>
      );
    }

    return yellowStars;
  };
  return (
    <div className="Secondcard">
      <div className="number">
        <h1>4</h1>
      </div>
      <div className="image">
        <img src="/assets/laptop.png" alt="" />
        <p>CDK</p>
      </div>
      <div className="description">
        <h2>
          <b>CDK Responsive Builder</b>: An extensive library of widgets and
          apps, and detailed step-by-step guides
        </h2>
        <h1>Main Highlights</h1>
        <div className="high_ratings">
          <div className="rating_Compo">
            <h1>9.9</h1>
            <p>Building Responsive</p>
          </div>
          <div className="rating_Compo">
            <h1>8.9</h1>
            <p>Cool</p>
          </div>
          <div className="rating_Compo">
            <h1>8.9</h1>
            <p>Docs</p>
          </div>
        </div>
        <div className="loveit">
          <h1>Why we Love it</h1>
          <div className="approval">
            <IoCheckmark className="check" />
            <p>Documentation</p>
          </div>
          <div className="approval">
            <IoCheckmark className="check" />
            <p>Easy Use</p>
          </div>
          <div className="approval">
            <IoCheckmark className="check" />
            <p>Out Of Box</p>
          </div>
        </div>

        <span>Show more</span>
      </div>
      <div className="ratingSection">
        <div className="star_rating">
          <h1>9.1</h1>
          <h2>Very Good</h2>
          <span> {renderStars(4.1)}</span>
        </div>
        <button>View</button>
      </div>
    </div>
  );
};

export default Second;
