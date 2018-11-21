
export const GET_ALL = "GET_ALL";
export const GET_MODEL = "GET_MODEL";
export const SET_AIS = "SET_AIS";
export const ROTATE_SUB = "ROTATE_SUB";


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

export const rotateSub = (arg) => {
  return {
    type: ROTATE_SUB,
    payload: data,
    id: arg
  }
}