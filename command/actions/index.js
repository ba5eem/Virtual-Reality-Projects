
export const GET_ALL = "GET_ALL";
export const GET_MODEL = "GET_MODEL";


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

