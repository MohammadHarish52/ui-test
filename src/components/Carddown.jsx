import { cards } from "../constants/CardDown";

const Carddown = () => {
  return (
    <div className="cardsDown">
      <h1>Related Deals You might Like</h1>
      <div className="cards">
        {cards.map((index) => {
          return (
            <div
              className="card"
              key={index.id}
              style={{ backgroundColor: "fff" }}
            >
              <div className="img">
                <img src={index.img} />
              </div>
              <div className="discount">
                <span>{index.off}</span>
                <span>{index.time}</span>
              </div>
              <h5>{index.title}</h5>
              <p>{index.description}</p>
              <div className="price">
                <h1>{index.Price}</h1>
                <div className="discountprice">
                  <h2>{index.discountPrice}</h2>
                  <p>({index.discountpercentage} Off)</p>
                </div>
              </div>
              <button>{index.btn}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carddown;
