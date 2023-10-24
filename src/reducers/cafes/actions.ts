import { Coffe } from './reducer'

export enum ActionTypes {
  ADD_COFFE = 'ADD_COFFE',
  REMOVE_COFFE = 'REMOVE_COFFE',
}
export function addCoffe(newCoffe: Coffe) {
  return {
    type: ActionTypes.ADD_COFFE,
    payload: {
      newCoffe,
    },
  }
}
export function removeCoffe(removeCoffe: Coffe) {
  return {
    type: ActionTypes.REMOVE_COFFE,
    payload: {
      removeCoffe,
    },
  }
}
