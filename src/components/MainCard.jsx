import { cardsData } from "../constants/CardData";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { GoTrophy } from "react-icons/go";
import { IoDiamondOutline } from "react-icons/io5";

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
      {cardsData.map((data, index) => {
        return (
          <div className="card" key={data.id}>
            {(index === 0 || index === 1) && (
              <div className="choice">
                {/* Conditionally render icon */}
                {data.icon === "GoTrophy" ? (
                  <GoTrophy className="icon" />
                ) : data.icon === "IoDiamondOutline" ? (
                  <IoDiamondOutline className="icon" />
                ) : null}
                <h3>{data.choice}</h3>
              </div>
            )}
            <div className="number">
              <h1>{data.num}</h1>
            </div>
            <div className="image">
              <img src={data.img} alt="" />
              <p>{data.title}</p>
            </div>
            <div className="description">
              <h2>
                <b>{data.MainTitle}</b> - {data.description}
              </h2>
              <h1>Main Highlights</h1>
              <h3>{data.highlights}</h3>

              <span>Show more</span>
            </div>
            <div className="ratingSection">
              <div className="star_rating">
                <h1>{data.starRating}</h1>
                <h2>{data.StarTitle}</h2>
                <span> {renderStars(data.stars)}</span>
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
