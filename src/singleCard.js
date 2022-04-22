import "./singleCards.css";

const singleCard = ({ card }) => {
  return (
    <div className="card">
      <div>
        <img className="front" src={card.src} alt="card front" />
        <img className="back" src="/img/cover.png" alt="card front" />
      </div>
    </div>
  );
};

export default singleCard;
