import React from 'react'
import { connect } from 'react-redux';
import ColumnComponent from '../components/ColumnComponent.jsx'
import * as actions from '../actions/actions.js'

const mapStateToProps = (store) => ({
    totalScore: store.trivia.totalScore,
    questionData: store.trivia.questionData
})


const mapDispatchToProps = (dispatch) => ({
    startGame: () => dispatch (actions.startGame())
  });


class MainContainer extends React.Component {
    constructor(props) {
        super(props)
    }

  

    render(){
        console.log("mainContainer:", this.props.questionData)
        return (
            <div className='main-container-div'>
                <h1>Would you like to play a game?</h1>
                <button onClick={this.props.startGame}>Start Game</button>
                <ColumnComponent questionData={this.props.questionData}/>

            </div>
        )            
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(MainContainer);