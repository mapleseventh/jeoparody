/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */

// import actionType constants
import * as types from '../constants/actionTypes'
import axios from 'axios';

export const flipCard = (event) => ({
  type: types.FLIP_CARD,
  payload: event,
});

export const inputAnswer = (event) => ({
  type: types.INPUT_ANSWER,
  payload: event,
});

export const submitAnswer = (event) => ({
  type: types.SUBMIT_ANSWER,
  payload: event,
});

export const startGame = () => (dispatch, getState) => {
  let url = "http://jservice.io/api/clues?category=2";
  // let requestHead = {
  //   method: 'get',
  //   mode: 'no-cors',
  //   url: url,
  //   header: {'Access-Control-Allow-Origin': '*',
  //             'Content-Type': 'application/json'}
  // }
  axios.get(url)
    .then(response => {
    return response.data
  }).then(data => {
    console.log('action.js: ', data)
    dispatch({
      type: types.START_GAME,
      payload: data
    })
  })
};