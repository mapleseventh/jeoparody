import React from 'react';

const Card = (props) => {

  const { value, clue, answer, state } = props;



  return (
    <div className='card-component-div'>
      <div className='point-value'>{value}</div>
    </div>
  )
}


export default Card;