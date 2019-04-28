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
    inputAnswer: (event) => dispatch(actions.inputAnswer(event))
});


class MainContainer extends React.Component {
    constructor(props) {
        super(props)
    }




    render() {
        console.log(this.props.totalScore)

        let questionData = this.props.questionData;
        let categories = [];

        questionData.forEach((element, i) => {
            console.log(element);
            const newColumn = <ColumnComponent category={element} key={element.name} />
            categories.push(newColumn);
        });

        return (
            <div className='main-container-div'>
                <button onClick={this.props.startGame}>Start Game</button>

                <div className="column-container">
                    {categories}
                </div>

                <div className='clue-display'>
                    What is the best game show ever?
                </div>

                <form id='answer-form'
                    onSubmit={e => {
                        e.preventDefault();
                        this.props.submitAnswer()
                    }} >
                    <input id="answer-input"
                        onChange={this.props.inputAnswer}
                        value={this.props.currentAnswer} />
                    <input id="submit-answer" type='submit' />
                </form>
            </div >
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);