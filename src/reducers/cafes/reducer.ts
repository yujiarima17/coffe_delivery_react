import { ActionTypes } from './actions'
import { produce } from 'immer'

export interface Coffe {
  id: string
  coffeName: string
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
        if (indexOfCoffeAlreadyAdded !== -1) {
          draft.cafes[indexOfCoffeAlreadyAdded].orderQuantity += 1
        } else {
          draft.cafes.push(action.payload.newCoffe)
        }
      })
    case ActionTypes.REMOVE_COFFE:
      return produce(state, (draft) => {
        const removeCoffeIndex = draft.cafes.indexOf(action.payload.newCoffe)
        draft.cafes[removeCoffeIndex].orderQuantity -=
          action.payload.removeCoffe.quantity
      })
    default:
      return state
  }
}
