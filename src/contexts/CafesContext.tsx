// import { ReactNode, useReducer } from 'react'
// import { Coffe, cyclesReducer } from '../reducers/cafes/reducer'
// import { addCoffe, removeCoffe } from '../reducers/cafes/actions'
import { ReactNode, createContext, useReducer } from 'react'
import { Coffe, cafesReducer } from '../reducers/cafes/reducer'
import { addCoffeAction, removeCoffeAction } from '../reducers/cafes/actions'
export interface CoffeData {
  id: string
  coffeName: string
  orderQuantity: number
}

interface CafesContextType {
  cafes: Coffe[]
  addNewCoffe: (data: CoffeData) => void
  removeCoffe: (data: CoffeData) => void
}
export const CafesContext = createContext({} as CafesContextType)
interface CafesContextProviderProps {
  // qualquer elemento válido do html
  children: ReactNode
}
export function CafesContextProvider({ children }: CafesContextProviderProps) {
  const [cafesState, dispatch] = useReducer(cafesReducer, {
    cafes: [],
  })

  const { cafes } = cafesState
  function addNewCoffe(data: CoffeData) {
    const newCoffe: Coffe = {
      id: data.id,
      coffeName: data.coffeName,
      orderQuantity: data.orderQuantity,
    }
    console.log(newCoffe)
    dispatch(addCoffeAction(newCoffe))
  }
  function removeCoffe(data: CoffeData) {
    const removeCoffe: Coffe = {
      id: data.id,
      coffeName: data.coffeName,
      orderQuantity: data.orderQuantity,
    }
    dispatch(removeCoffeAction(removeCoffe))
  }
  return (
    <CafesContext.Provider
      value={{
        cafes,
        addNewCoffe,
        removeCoffe,
      }}
    >
      {children}
    </CafesContext.Provider>
  )
}
