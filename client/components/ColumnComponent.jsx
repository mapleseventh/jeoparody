import React from 'react';
import CardComponent from './CardComponent.jsx';

const Column = (props) => {

  console.log(props.questionData)



  return (
    <div className='column-component-div'>
      <p>{props.questionData[0].name}</p>
      <CardComponent cardQuestion={props.questionData[0].clues[0].clue}/>
    </div>
  )
}







export default Column;