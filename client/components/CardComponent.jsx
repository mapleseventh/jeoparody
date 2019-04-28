import React from 'react';

const Card = (props) => {

  const { value, clue, answer, state } = props;



  return (
    <div className='card-component-div'>
<<<<<<< HEAD
      <p>This is the card
      //{props.cardQuestion}</p>
=======
      <div className='point-value'>${value}</div>
>>>>>>> Viper/master
    </div>
  )
}


export default Card;