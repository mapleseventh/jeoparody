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

export const flipCard = (event) => ({
  type: types.FLIP_CARD,
  payload: event,
});