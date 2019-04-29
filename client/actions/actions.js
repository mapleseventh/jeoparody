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

export const toggleBoard = () => ({
  type: types.TOGGLE_BOARD
})

export const inputUsername = (event) => ({
  type: types.INPUT_USERNAME,
  payload: event.target.value
})

export const clearBuzzers = () => (dispatch, getState) => {
  const url = '/api/clearBuzzers'
  axios.get(url)
  .then(response => {
    return response.data
  }).then(data => {
    console.log('Buzzer Data', data)
    dispatch({
      type: types.CLEAR_BUZZER,
    })
  })
};

export const pressBuzzer = () => (dispatch, getState) => {
  let state = getState();
  let currentPlayer = state.trivia.currentPlayer;
  console.log('Current Player in state:',currentPlayer);
  let url = `/api/hitBuzzer?name=${currentPlayer}`;
  axios.get(url)
    .then(response => {
      return response.data
    }).then(data => {
      console.log('Buzzer Data', data)
      dispatch({
        type: types.PRESS_BUZZER,
        payload: currentPlayer
      })
    })
}

export const setGameLoopTrue = () => ({
  type: types.SET_GAMELOOP
})

export const getPlayerData = (e) => (dispatch) => {
  const url = '/api/getplayers'
  axios.get(url)
    .then(response => {
      return response.data
    }).then(data => {
      dispatch({
        type: types.GET_PLAYER_DATA,
        payload: data
      })
    })
}

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
}