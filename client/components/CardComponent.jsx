import React from 'react';

const Card = (props) => {

  const { value, clue, answer, state, flipCard, cardId, id } = props;

  return (
    <div className='card-component-div'>
      <div className='point-value' id={props.id} onClick={() => props.flipCard(props.cardId)}>{value}</div>
    </div>
  )
}


export default Card;