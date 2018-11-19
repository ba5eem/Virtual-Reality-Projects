import {
  GET_ALL,
  GET_MODEL
  } from '../actions'



export default function(state=[], action){
  switch(action.type){
    case GET_ALL:
      return state;
    case GET_MODEL:
      if(action.id === undefined){
        return state;
      }
    	return action.id;
    default:
      return state;
  }
}