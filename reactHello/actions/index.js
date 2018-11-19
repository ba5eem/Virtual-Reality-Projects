
export const GET_ALL = "GET_ALL";

import { data } from './seed';


export const getAll = (card) => {
  return {
    type: GET_ALL,
    payload: data
  }
}

