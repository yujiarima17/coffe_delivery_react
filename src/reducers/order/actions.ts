import { OrderProps } from './reducer'

export enum ActionTypes {
  SET_ORDER = 'SET_ORDER',
}

export function setOrderAction(newOrder: OrderProps) {
  return {
    type: ActionTypes.SET_ORDER,
    payload: {
      newOrder,
    },
  }
}
