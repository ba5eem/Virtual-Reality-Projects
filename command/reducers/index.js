import {
  GET_ALL,
  GET_MODEL
  } from '../actions'



export default function(state=[], action){
  switch(action.type){
    case GET_ALL:
      return action.payload;
    case GET_MODEL:
    	return action.id;
    default:
      return state;
  }
}