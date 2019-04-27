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
    totalScore: 0,
    questionData: []
    // Need to add value for player answers to each card object
        
        
}


const triviaReducer = (state = initialState, action) => {


    switch (action.type) {
        case types.FLIP_CARD:

            return {
                ...state
            };

        case types.START_GAME:
        
            let questionData = state.questionData.slice();
            questionData = action.payload;
            console.log('this is inside triviaReducer:  ' + questionData)
        return {
            ...state,
            questionData
        }
        default:
            return state;

    }
};

export default triviaReducer;