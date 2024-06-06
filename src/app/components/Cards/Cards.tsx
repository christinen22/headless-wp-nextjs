import { CardsBlock } from "../../lib/types";

interface CardProps {
  cards: CardsBlock["cards"];
}

const Cards: React.FC<CardProps> = ({ cards }) => {
  return (
    <section className="cards-section">
      {cards.repeater.map((card, index) => (
        <div className="card" key={index}>
          <div className="card-container">
            <div className="card-content">
              <div className="card-image">
                {card.image && (
                  <img
                    src={card.image.node.mediaItemUrl}
                    alt={card.title}
                    className="media"
                  />
                )}
              </div>
              <h1 className="card-title">{card.title}</h1>
              <p>{card.description}</p>
              <a href={card.link} className="button">
                Shop now
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Cards;
