import React from 'react';

const Card = (props) => {

  return (
    <div className='card-component-div'>
      <p>{props.cardQuestion}</p>
    </div>
  )
}


export default Card;