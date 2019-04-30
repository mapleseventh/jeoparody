/**
 * ************************************
 *
 * @module  marketsReducer
 * @author
 * @date
 * @description reducer for market data
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';


const initialState = {
    username: '',
    password: '',
    totalScore: 0,
    currentQuestion: '',
    currentClue: '',
    currentAnswer: '',
    currentValue: 0,
    questionData: '',
    //multiplayer
    currentUserBoard: false,
    currentPlayer: '',
    disableUserInput: false,
    currentPlayers: [],
    gameLoopActive: false,


    //question/game data
    questionData:
        // Need to add value for player answers to each card object
        [
            {
                name: "School Mottos",
                clues: [
                    {
                        clue: "Many schools use this motto from genesis, gods first spoken comsdmand",
                        answer: "Let there be light",
                        state: "fresh",
                        value: 100
                    },
                    {
                        clue: "Many schools use this motto from genesis, gods first spoken command",
                        answer: "Let there be light",
                        state: "fresh",
                        value: 200
                    }, {
                        clue: "Many schools use this motto from genesis, gods first spoken command",
                        answer: "Let there be light",
                        state: "fresh",
                        value: 300
                    }, {
                        clue: "Many schools use this motto from genesis, gods first spoken command",
                        answer: "Let there be light",
                        state: "fresh",
                        value: 400
                    }, {
                        clue: "Many schools use this motto from genesis, gods first spoken command",
                        answer: "Let there be light",
                        state: "fresh",
                        value: 500
                    },
                ]
            },
            {
                name: "Brazillian",
                clues: [
                    {
                        clue: "The University of Brazil, the country's oldest, wasn't founded until this century",
                        answer: "20th century",
                        state: "fresh",
                        value: 100
                    },
                    {
                        clue: "The layout of this, the capital, resembles a jet airliner",
                        answer: "brasillia",
                        state: "fresh",
                        value: 200
                    }, {
                        clue: "1985 film set in Brazil that featured the fierce people, the invisible people, & the bat people",
                        answer: "The Emerald Forest",
                        state: "fresh",
                        value: 300
                    }, {
                        clue: "This democratic privilege is compulsory for all Brazilians who are literate & between the ages of 18 & 65",
                        answer: "Voting",
                        state: "fresh",
                        value: 400
                    }, {
                        clue: "It got its name after a Spanish explorer reported being attacked by female warriors there",
                        answer: "Amazon River",
                        state: "fresh",
                        value: 500
                    },
                ]
            },
            {
                name: "eddie murphy movies",
                clues: [
                    {
                        clue: "Art Buchwald was awarded original story credit for this film in which Eddie played an African prince",
                        answer: "Coming to America",
                        state: "fresh",
                        value: 100
                    },
                    {
                        clue: "Axel Foley was a cop on this midwestern city's payroll",
                        answer: "Detroit",
                        state: "fresh",
                        value: 200
                    }, {
                        clue: "1990 sequel to his 1982 \"48HRS",
                        answer: "Another 48hours",
                        state: "fresh",
                        value: 300
                    }, {
                        clue: "He played the man with whom Eddie Murphy traded places in \"Trading Places\"",
                        answer: "Dan Ackroy",
                        state: "fresh",
                        value: 400
                    }, {
                        clue: "Who did eddie play in the barber shop in coming to ameria",
                        answer: "Everyone",
                        state: "fresh",
                        value: 500
                    },
                ]
            },
            {
                name: "Potent Potables",
                clues: [
                    {
                        clue: "Helllo World....I'm getting lazy",
                        answer: "Helllo World....I'm getting lazy",
                        state: "fresh",
                        value: 100
                    },
                    {
                        clue: "Helllo World....I'm getting lazy",
                        answer: "Helllo World....I'm getting lazy",
                        state: "fresh",
                        value: 200
                    }, {
                        clue: "Helllo World....I'm getting lazy",
                        answer: "Helllo World....I'm getting lazy",
                        state: "fresh",
                        value: 300
                    }, {
                        clue: "Helllo World....I'm getting lazy",
                        answer: "Helllo World....I'm getting lazy",
                        state: "fresh",
                        value: 400
                    }, {
                        clue: "Helllo World....I'm getting lazy",
                        answer: "Helllo World....I'm getting lazy",
                        state: "fresh",
                        value: 500
                    },
                ]
            },

        ],
    currentGame: {
        score: 123,
        questions: [
            {
                category: 'eddie murphy movies',
                question: 'What country did Price Akeem come from?',
                correct: 'Zamunda',
                answered: 'America',
                time: 5,
            },
            {
                category: 'eddie murphy movies',
                question: 'Complete this quote: Looking Good Billy Rey',
                correct: 'Feeling good Lewis',
                answered: 'Feeling good Lewis',
                time: 3,
            },
        ]
    }
}

function massageAnswers(answer) {
    let retval = answer.toLowerCase();
    retval = retval.replace(/<.*>/g,'')
    retval = retval.replace(/ /g,'');
    console.log(`Massaged answer:${retval}`);
    return retval;
}



const triviaReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.TOGGLE_BOARD: {
            const currentUserBoard = !state.currentUserBoard;
            console.log('toggle Board');
            return {
                ...state,
                currentUserBoard
            }
        }

        case types.SET_GAMELOOP:
            let gameLoopActive = true;
            return {
                ...state,
                gameLoopActive
            }

        case types.GET_PLAYER_DATA: {
            const currentPlayers = action.payload;
            //TODO add in check vs current players
            //current implmentation is causing constant state changes, I think

            const prevPlayers = state.currentPlayers;

            const string1 = JSON.stringify(prevPlayers);
            const string2 = JSON.stringify(currentPlayers);
            if (string1 == string2) {
                return state;
            } else {
                console.log(`Player State changed, update state`);
                console.log(`${string1}`);
                console.log(`${string2}`);
                currentPlayers.forEach(player => {
                    if (player.buzzed == true) {
                        console.log(`Setting Buzzed Player as: ${player.name}`);
                    }
                });
                return {
                    ...state,
                    currentPlayers
                }
            }
        }

        case types.INPUT_USER:
            let currentPlayer = (action.payload);
            // console.log(`currentPlayer:${currentPlayer}`);
            if (currentPlayer === "asdf") currentPlayer = "asdff"
            return {
                ...state,
                currentPlayer
            }

        case types.GET_LOGIN_DATA: {
            //TODO check login data from server
            console.log(`Login Data: ${action.payload}`);
            const loginData = action.payload;
            let currentPlayer = state.currentPlayer;
            let disableUserInput = state.disableUserInput;
            if (loginData != '') {
                currentPlayer = loginData
                disableUserInput = true;
            }
            console.log(`Login Data: ${loginData}`);
            return {
                ...state,
                currentPlayer,
                disableUserInput
            }
        }

        case types.INPUT_USERNAME: {
            const username = action.payload;
            return {
                ...state,
                username
            }
        }

        case types.INPUT_PASSWORD: {
            const password = action.payload;

            return {
                ...state,
                password
            }
        }

        case types.SUBMIT_LOGIN: {


            return {
                ...state,

            }
        }

        case types.CREATE_USER: {
            //logic mostly in back end
            return {
                ...state
            }
        }

        case types.CLEAR_BUZZER:
            console.log(`Clearing Buzzer State`);
            return {
                ...state,
            }

        case types.AWARD_POINTS: {
            //Adding points handled on backend

            return {
                ...state,

            }
        }

        case types.PRESS_BUZZER:
            console.log("Buzzer pressed");
            // TODO - disable input when username is set
            // will be done by cookie / login soon
            if (state.disableUserInput === false) {
                const disableUserInput = true;
                return {
                    ...state,
                    disableUserInput,
                }

            } else {  //User submitted

            }

            return state;


        case types.START_GAME:

            let questionData = state.questionData.slice();
            questionData = action.payload;
            console.log('this is inside triviaReducer:  ' + questionData)
            return {
                ...state,
                questionData
            }

        case types.FLIP_CARD:
            console.log('--------------------------------------------')
            console.log('flipcard payload:', action.payload);

            let column = action.payload[0];
            let card = action.payload[1];
            let clue = state.questionData[column].clues[card]['clue'];
            let currentState = state.questionData[column].clues[card]['state'];
            let currentValue = state.questionData[column].clues[card]['value'];
            let questionClue = action.payload;
            if (currentState === 'fresh') {
                document.querySelector('#question').innerHTML = clue;
                document.querySelector('.clue-display').style.display = 'block';
            }

            return {
                ...state,
                questionClue,
                currentValue
            };

        case types.SUBMIT_ANSWER:
            console.log('Answer Submitted');
            // first, take the input value from input box
            // second, check the input answer is equal to the right answer or not

            column = state.questionClue[0];
            card = state.questionClue[1];
            let totalScore = state.totalScore;
            let check;
            let givenAnswer = state.currentAnswer;
            let correctAnswer = state.questionData[column].clues[card]['answer'];

            let givenMassaged = massageAnswers(givenAnswer);
            let correctMassaged = massageAnswers(correctAnswer)
            if (givenMassaged === correctMassaged) { // only for string type answer, still need condition for number and boolean
                console.log('correct!');
                check = true;
            } else {
                console.log(false);
                check = false;
            }
            state.questionData[column].clues[card]['state'] = state.currentAnswer;
            if (check) {
                totalScore += state.currentValue;
                document.getElementById(`${state.questionClue}`).style.background = 'green';
                alert('Yeah! You got it!');
            } else if (check === false) {
                document.getElementById(`${state.questionClue}`).style.background = 'red';
                alert(`NO! You didn't got it!  Expected: '${correctAnswer}'`);
            }
            document.querySelector('.clue-display').style.display = 'none';
            
            return {
                ...state,
                currentAnswer: '',
                questionClue: '',
                totalScore
            };

        case types.INPUT_ANSWER:
            // console.log('INPUT_ANSWER:', action.payload)
            const currentAnswer = action.payload;
            return {
                ...state,
                currentAnswer
            }
        default:
            console.log(`Default Reducer case hit for ${action.type}`);
            return state;

    }
};

export default triviaReducer;