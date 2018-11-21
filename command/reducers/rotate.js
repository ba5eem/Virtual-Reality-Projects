import {
  ROTATE_SUB
  } from '../actions'

let local = {
  data: [],
  id: 'all'
}


const rotate = (state=0, action) => {
  switch(action.type){
    case ROTATE_SUB:
      if(action.id === undefined){ return state; }
      else if(action.id === '-'){ 
        if(state === 120){ return state; }
        return state+10; }
      else if(action.id === '+'){
        if(state === -120){ return state; }
        return state-10;
      }
      
    default:
      return state;
  }
}

export default rotate;