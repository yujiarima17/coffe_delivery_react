import { ActionTypes } from './actions'
import { produce } from 'immer'

export interface AddressProps {
  uf: string
  localidade: string
  logradouro: string
  numero: string
  bairro: string
  cep: string
  complemento: string
}
interface AddressState {
  addressData: AddressProps
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function addressReducer(state: AddressState, action: any) {
  switch (action.type) {
    case ActionTypes.SET_ADDRESS:
      return produce(state, (draft) => {
        console.log(action.payload.newAddress)
        draft.addressData = action.payload.newAddress
      })

    default:
      return state
  }
}
