import React from 'react'
import { connect } from 'react-redux';
import ColumnComponent from '../components/ColumnComponent.jsx'
import PlayerComonent from '../components/PlayerComponent.jsx'
import * as actions from '../actions/actions';

const mapStateToProps = (store) => ({
    totalScore: store.trivia.totalScore,
    questionData: store.trivia.questionData,
    currentAnswer: store.trivia.currentAnswer,

    currentUserBoard: store.trivia.currentUserBoard,
    currentPlayer: store.trivia.currentPlayer,
    disableUserInput: store.trivia.disableUserInput,
    currentPlayers: store.trivia.currentPlayers,
    gameLoopActive: store.trivia.gameLoopActive,
})


const mapDispatchToProps = (dispatch) => ({
    startGame: () => dispatch(actions.startGame()),
    submitAnswer: (answer) => dispatch(actions.submitAnswer(answer)),
    inputAnswer: (event) => dispatch(actions.inputAnswer(event)),
    flipCard: (event) => dispatch(actions.flipCard(event)),

    toggleBoard: () => dispatch(actions.toggleBoard()),
    getPlayerData: () => dispatch(actions.getPlayerData()),
    pressBuzzer: (event) => dispatch(actions.pressBuzzer(event)),
    inputUsername: (event) => dispatch(actions.inputUsername(event)),
    setGameLoopTrue: (event) => dispatch(actions.setGameLoopTrue(event)),
});


class MainContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        // let questionData = this.props.questionData;
        // let categories = [];

        // questionData.forEach((category, i) => {
        //     const newColumn = <ColumnComponent flipCard={this.props.flipCard} columnId={i} category={category} key={category.name} />
        //     categories.push(newColumn);
        // });
//
        // return (
        //     <div className='main-container-div'>
        //         <button id='newGame' onClick={this.props.startGame}>New Game</button>
        //         <h1 id="totalScore">Total Score: {this.props.totalScore}</h1>
        //         <div className="column-container">
        //             {categories}   
        //         </div>

        //         <div className='clue-display'>
        //             <div id="question">This is where the question will go</div>
        //                 <input id="answer-input"
        //                     onChange={e => this.props.inputAnswer(e.target.value)}
        //                     value={this.props.currentAnswer} />
        //                 <button id="submit-answer" onClick={this.props.submitAnswer}>submit</button>
                    

        //         </div>
        //     </div >
        // )


        let questionData = this.props.questionData;
        let categories = [];
        let userInputClass = '';
        let currentPlayers;
        let playersArray;



        if (this.props.currentUserBoard) { //Current user is the game board
            // questionData.forEach((element, i) => {
            //     // console.log(element);
            //     const newColumn = <ColumnComponent category={element} key={element.name} />
            //     categories.push(newColumn);
            // });
            questionData.forEach((category, i) => {
                const newColumn = <ColumnComponent flipCard={this.props.flipCard} columnId={i} category={category} key={category.name} />
                categories.push(newColumn);
            });

            if (this.props.gameLoopActive === false) {
                setInterval(this.props.getPlayerData, 300);
                this.props.setGameLoopTrue();
            }


            playersArray = [];
            currentPlayers = this.props.currentPlayers
            currentPlayers.forEach(player => {
                const newPlayer = <PlayerComonent
                    name={player.name}
                    buzzed={player.buzzed}
                    points={player.points}
                    key={player.name}
                />
                playersArray.push(newPlayer);
            });


        } else { //user is a player
            if (this.props.disableUserInput) {
                userInputClass = "disableUserInput"
            }
        }
        if (this.props.currentUserBoard) {
            return (
            <div className='main-container-div'>
                    <button id='newGame' onClick={this.props.startGame}>New Game</button>
                    <button onClick={this.props.toggleBoard}>Toggle Board</button>
                    <button onClick={this.props.getPlayerData}>Get Player Data</button>
                    <div id="playerColumn">
                        <h3>Players:</h3>
                        {playersArray}
                    </div>

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
        } else {  //User is buzzer
            return (
                <div>
                    <button onClick={this.props.toggleBoard}>Toggle Board</button>

                    <form onSubmit={(e) => {
                        e.preventDefault();
                        console.log(e.target.playerInput.value);
                        if (e.target.playerInput.value != "")
                            this.props.pressBuzzer()
                    }} >
                        <input id="playerInput"
                            placeholder="Enter your name:"
                            onChange={this.props.inputUsername}
                            className={userInputClass}
                            name='playerInput'
                            autoComplete="off"
                            type="text" />
                        <input id="playerBuzzer" type="submit" value="BUZZ IN" />
                    </form>
                </div>
            )
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);