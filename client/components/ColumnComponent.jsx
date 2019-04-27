import React from 'react';
import CardComponent from './CardComponent.jsx';

const Column = (props) => {

  console.log(props.questionData)



  return (
    <div className='column-component-div'>
      <p>This is our column</p>
      <CardComponent 
      //cardQuestion={props.questionData[0].clues[0].clue}
      />
    </div>
  )
}







export default Column;