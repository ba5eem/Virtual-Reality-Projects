import {
  GET_ALL,
  GET_MODEL,
  SET_AIS
  } from '../actions'

let local = {
  data: [],
  id: 'all'
}


export default function(state=[], action){
  switch(action.type){
    case GET_ALL:
      return state;
    case GET_MODEL:
      if(action.id === undefined){
        return state;
      }
    	return action.id;
    case SET_AIS:
      if(action.id === undefined){
        return state;
      }
      return action.id;
    default:
      return state;
  }
}