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

    toggleBoard: () => dispatch(actions.toggleBoard()),
    getPlayerData: () => dispatch(actions.getPlayerData()),
    clearBuzzers: () => dispatch(actions.clearBuzzers()),
    pressBuzzer: (event) => dispatch(actions.pressBuzzer(event)),
    inputUser: (event) => dispatch(actions.inputUser(event)),
    setGameLoopTrue: (event) => dispatch(actions.setGameLoopTrue(event)),
    inputUsername: (event) => dispatch(actions.inputUsername(event)),
    inputPassword: (event) => dispatch(actions.inputPassword(event)),

    getLoginData: () => dispatch(actions.getLoginData()),
    submitLogin: () => dispatch(actions.submitLogin()),
});


class MainContainer extends React.Component {
    constructor(props) {
        super(props)
    }




    render() {

        //If we don't have a name for the player, querey the server if we have anything for them
        if (this.props.currentPlayer === '') {
            this.props.getLoginData();
        }


        let questionData = this.props.questionData;
        let categories = [];
        let userInputClass = '';
        let currentPlayers;
        let playersArray;

        if (this.props.currentUserBoard) { //Current user is the game board
            questionData.forEach((element, i) => {
                // console.log(element);
                const newColumn = <ColumnComponent category={element} key={element.name} />
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
                    <button onClick={this.props.toggleBoard}>Toggle Board</button>
                    <button onClick={this.props.clearBuzzers}>Clear Buzzers</button>
                    <div id="playerColumn">
                        <h3>Players:</h3>
                        {playersArray}
                    </div>
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
        } else {  //User is buzzer
            return (
                <div>
                    <button onClick={this.props.toggleBoard}>Toggle Board</button>
                    <form id="loginform" onSubmit={(e) => {
                        e.preventDefault();
                        console.log(e.target.username.value);
                        if (e.target.username.value != "")
                            this.props.submitLogin()
                    }}>
                        <input type="text" id="username" placeholder="Username" onChange={this.props.inputUsername} />
                        <input type="text" id="password" placeholder="Password" onChange={this.props.inputPassword} />
                        <input type="submit" />
                    </form>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        console.log(e.target.playerInput.value);
                        if (e.target.playerInput.value != "")
                            this.props.pressBuzzer()
                    }} >
                        <input id="playerInput"
                            placeholder="Enter your name:"
                            onChange={this.props.inputUser}
                            className={userInputClass}
                            value={this.props.currentPlayer}
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