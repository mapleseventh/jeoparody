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
    totalScore: 0,
}


const triviaReducer = (state = initialState, action) => {


    switch (action.types) {
        case types.FLIP_CARD:
            return state;

        default:
            return state;

    }
};

export default triviaReducer;