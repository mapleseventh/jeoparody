import React from 'react'
import { connect } from 'react-redux';
import ColumnComponent from '../components/ColumnComponent.jsx'
import * as actions from '../actions/actions';

const mapStateToProps = (store) => ({
    totalScore: store.trivia.totalScore,
    questionData: store.trivia.questionData,
    currentAnswer: store.trivia.currentAnswer,
})


const mapDispatchToProps = (dispatch) => ({
    startGame: () => dispatch (actions.startGame()),
    submitAnswer: (answer) => dispatch(actions.submitAnswer(answer)),
    inputAnswer: (event) => dispatch(actions.inputAnswer(event)),
    flipCard: (event) => dispatch(actions.flipCard(event))
});


class MainContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        let questionData = this.props.questionData;
        let categories = [];

        questionData.forEach((category, i) => {
            const newColumn = <ColumnComponent flipCard={this.props.flipCard} columnId={i} category={category} key={category.name} />
            categories.push(newColumn);
        });

        return (
            <div className='main-container-div'>
                <button id='newGame' onClick={this.props.startGame}>New Game</button>
                <h1 id="totalScore">Total Score: {this.props.totalScore}</h1>
                <div className="column-container">
                    {categories}   
                </div>

                <div className='clue-display'>
                    <div id="question">This is where the question will go</div>
                    
                   
                        <input id="answer-input"
                            onChange={e => this.props.inputAnswer(e.target.value)}
                            value={this.props.currentAnswer} />

                        <button id="submit-answer" onClick={this.props.submitAnswer}>submit</button>
                    

                </div>

            </div >
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);