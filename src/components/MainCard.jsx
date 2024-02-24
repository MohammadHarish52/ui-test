import { cardsData } from "../constants/CardData";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";

const MainCard = () => {
  const renderStars = (stars) => {
    const yellowStars = [];
    const fullStars = Math.floor(stars);
    const hasHalfStar = stars % 1 >= 0.5;

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
          <IoIosStarHalf />
        </span>
      );
    }

    return yellowStars;
  };

  return (
    <div className="mainCard">
      {cardsData.map((index) => {
        return (
          <div className="card" key={index.id}>
            <div className="image">
              <img src={index.img} alt="" />
              <p>{index.title}</p>
            </div>
            <div className="description">
              <h2>
                <b>{index.MainTitle}</b> - {index.description}
              </h2>
              <h1>Main Highlights</h1>
              <h3>{index.highlights}</h3>

              <span>Show more</span>
            </div>
            <div className="ratingSection">
              <div className="star_rating">
                <h1>{index.starRating}</h1>
                <h2>{index.StarTitle}</h2>
                <span> {renderStars(index.stars)}</span>
              </div>
              <button>View</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MainCard;
