import { AddressProps } from './reducer'

export enum ActionTypes {
  SET_ADDRESS = 'SET_ADDRESS',
}

export function setAddressAction(newAddress: AddressProps) {
  return {
    type: ActionTypes.SET_ADDRESS,
    payload: {
      newAddress,
    },
  }
}
