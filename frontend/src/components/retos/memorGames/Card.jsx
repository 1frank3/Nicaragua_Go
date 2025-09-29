// src/components/Card.jsx
import "./FlipCard.css";

const Card = ({ card, onCardClick, backImage }) => {
  const isFlipped = card.isFlipped || card.isMatched;

  return (
    <div
      className="w-full h-full aspect-square perspective"
      onClick={() => onCardClick(card)}
    >
      <div className={`card-inner ${isFlipped ? "is-flipped" : ""}`}>
        {/* Cara Trasera */}
        <div className="card-face card-back">
          <img
            src={backImage}
            alt="Reverso de la carta"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Cara Frontal */}
        <div className="card-face card-front">
          <img
            src={card.imageUrl}
            alt={`Carta ${card.contentId}`}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
