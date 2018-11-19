import {
  GET_ALL
  } from '../actions'


export default function(state=[], action){
  switch(action.type){
    case GET_ALL:
      return action.payload;
    default:
      return state;
  }
}