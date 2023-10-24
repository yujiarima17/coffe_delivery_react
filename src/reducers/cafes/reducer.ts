import { ActionTypes } from './actions'
import { produce } from 'immer'

export interface Coffe {
  id: string
  coffeName: string
  quantity: number
}
interface CafesState {
  cafes: Coffe[]
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function cyclesReducer(state: CafesState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_COFFE:
      return produce(state, (draft) => {
        const coffeAlreadyAdded = draft.cafes.includes(action.payload.newCoffe)

        if (coffeAlreadyAdded) {
          const coffeIndex = draft.cafes.indexOf(action.payload.newCoffe)
          draft.cafes[coffeIndex].quantity += 1
        } else {
          draft.cafes.push(action.payload.newCoffe)
        }
      })
    case ActionTypes.REMOVE_COFFE:
      return produce(state, (draft) => {
        const removeCoffeIndex = draft.cafes.indexOf(action.payload.newCoffe)
        draft.cafes[removeCoffeIndex].quantity -=
          action.payload.removeCoffe.quantity
      })
  }
}
