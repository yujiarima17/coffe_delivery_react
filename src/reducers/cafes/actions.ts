import { Coffe } from './reducer'

export enum ActionTypes {
  ADD_COFFE = 'ADD_COFFE',
  REMOVE_COFFE = 'REMOVE_COFFE',
}
export function addCoffeAction(newCoffe: Coffe) {
  return {
    type: ActionTypes.ADD_COFFE,
    payload: {
      newCoffe,
    },
  }
}
export function removeCoffeAction(removeCoffe: Coffe) {
  return {
    type: ActionTypes.REMOVE_COFFE,
    payload: {
      removeCoffe,
    },
  }
}
