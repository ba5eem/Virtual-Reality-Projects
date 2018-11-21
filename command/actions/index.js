
export const GET_ALL = "GET_ALL";
export const GET_MODEL = "GET_MODEL";
export const SET_AIS = "SET_AIS";


import { data } from './seed';


export const getAll = () => {
  return {
    type: GET_ALL,
    payload: data
  }
}

export const getModel = (id) => {
  return {
    type: GET_MODEL,
    payload: data,
    id: id
  }
}

export const setAis = () => {
  return {
    type: SET_AIS,
    payload: data,
    id: 'showaisinfo'
  }
}