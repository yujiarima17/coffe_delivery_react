import { ReactNode, createContext, useReducer } from 'react'
import { Coffe, cafesReducer } from '../reducers/cafes/reducer'
import { addCoffeAction, removeCoffeAction } from '../reducers/cafes/actions'
import { OrderProps, orderReducer } from '../reducers/order/reducer'
import { setOrderAction } from '../reducers/order/actions'
export interface CoffeData {
  id: ''
  coffeName: ''
  price: number
  orderQuantity: number
}

interface CafesContextType {
  orderData: OrderProps
  cafes: Coffe[]
  setOrderData: (data: OrderProps) => void
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
  const [orderState, dispatchOrder] = useReducer(orderReducer, {
    orderData: {
      orderDestination: {
        uf: '',
        localidade: '',
        logradouro: '',
        numero: '',
        bairro: '',
        cep: '',
        complemento: '',
      },
      orderBill: {
        payment: '',
        amount: 0,
      },
    },
  })
  const { orderData } = orderState
  const { cafes } = cafesState
  function setOrderData(orderData: OrderProps) {
    dispatchOrder(setOrderAction(orderData))
  }

  function addNewCoffe(data: CoffeData) {
    const newCoffe: Coffe = {
      id: data.id,
      coffePrice: data.price,
      coffeName: data.coffeName,
      orderQuantity: data.orderQuantity,
    }
    dispatch(addCoffeAction(newCoffe))
  }
  function removeCoffe(data: CoffeData) {
    const removeCoffe: Coffe = {
      id: data.id,
      coffePrice: data.price,
      coffeName: data.coffeName,
      orderQuantity: data.orderQuantity,
    }
    dispatch(removeCoffeAction(removeCoffe))
  }
  return (
    <CafesContext.Provider
      value={{
        orderData,
        cafes,
        setOrderData,
        addNewCoffe,
        removeCoffe,
      }}
    >
      {children}
    </CafesContext.Provider>
  )
}
