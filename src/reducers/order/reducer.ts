import { ActionTypes } from './actions'
import { produce } from 'immer'

interface AddressProps {
  uf: string
  localidade: string
  logradouro: string
  numero: string
  bairro: string
  cep: string
  complemento: string
}
interface OrderBillProps {
  payment: string
  amount: number
}
export interface OrderProps {
  orderDestination: AddressProps
  orderBill: OrderBillProps
}
interface OrderState {
  orderData: OrderProps
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function orderReducer(state: OrderState, action: any) {
  switch (action.type) {
    case ActionTypes.SET_ORDER:
      return produce(state, (draft) => {
        draft.orderData = action.payload.newOrder
      })

    default:
      return state
  }
}
