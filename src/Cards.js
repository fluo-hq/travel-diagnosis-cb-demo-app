import React from 'react';

export default function Cards(props) {
  return (
    <ul>
        {props.cards.map(card => {
          return (
            <li key={card.id}>
              <button onClick={() => props.onCardClick(card)}>{card.name}
                <img src={card.cardType.imageURL} height="30px" alt="card"/>
              </button>
            </li>
          );
        })}
    </ul>
  );
}