import React from 'react';
import CardComponent from './CardComponent.jsx';

const Column = (props) => {

  // console.log(props.category)

  const clues = props.category.clues;
  const cards = [];

  clues.forEach((current, i) => {
    const newCard = <CardComponent
      value={current.value}
      clue={current.clue}
      answer={current.answer}
      state={current.state}
      key={`${props.category.name}${i}`}
      cardId={`${props.columnId}${i}`}
      id={`${props.columnId}${i}`}
      flipCard={props.flipCard}
    />
    cards.push(newCard);
  });

  return (
    <div className='column-component-div'>
      <div className="category-name">
        <span>{props.category.name}</span>
      </div>
      <div className="cards-container">
        {cards}
      </div>
    </div>
  )
}







export default Column;