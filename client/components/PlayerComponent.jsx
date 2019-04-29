import React from 'react';

const Player = (props) => {

  const { name, buzzed, points } = props;

  let buzzedClass = ''
  if (props.buzzed == true) {
    buzzedClass = 'buzzed'
  }

  return (
    <div className={`player-component-div ${buzzedClass}`}>
      <div className='playerName' >{props.name}</div>
      <div className='playerPoints'>{props.points}</div>
    </div>
  )
}


export default Player;