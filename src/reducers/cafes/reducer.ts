import { ActionTypes } from './actions'
import { produce } from 'immer'

export interface Coffe {
  id: string
  coffeName: string
  price: number
  orderQuantity: number
}
interface CafesState {
  cafes: Coffe[]
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function cafesReducer(state: CafesState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_COFFE:
      return produce(state, (draft) => {
        const indexOfCoffeAlreadyAdded = draft.cafes.findIndex(
          (coffe) => coffe.id === action.payload.newCoffe.id,
        )
        indexOfCoffeAlreadyAdded !== -1
          ? (draft.cafes[indexOfCoffeAlreadyAdded].orderQuantity += 1)
          : draft.cafes.push(action.payload.newCoffe)
      })
    case ActionTypes.REMOVE_COFFE:
      return produce(state, (draft) => {
        const indexOfRemovedCoffe = draft.cafes.findIndex(
          (coffe) => coffe.id === action.payload.removeCoffe.id,
        )
        const removeCoffe = draft.cafes[indexOfRemovedCoffe]
        console.log(removeCoffe.coffeName)
        const totalAmount = draft.cafes[indexOfRemovedCoffe].orderQuantity
        const amountToRemove = action.payload.removeCoffe.orderQuantity
        if (amountToRemove === totalAmount) {
          draft.cafes = draft.cafes.filter(
            (coffe) => coffe.id !== removeCoffe.id,
          )
        }
        if (amountToRemove < totalAmount) {
          draft.cafes[indexOfRemovedCoffe].orderQuantity -= amountToRemove
        }
      })
    case ActionTypes.REMOVE_ALL_CAFE:
      return produce(state, (draft) => {
        draft.cafes = []
      })
    default:
      return state
  }
}
