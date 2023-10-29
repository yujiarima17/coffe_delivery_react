import { ReactNode, createContext, useReducer } from 'react'
import { Coffe, cafesReducer } from '../reducers/cafes/reducer'
import { addCoffeAction, removeCoffeAction } from '../reducers/cafes/actions'
import { AddressProps, addressReducer } from '../reducers/address/reducer'
import { setAddressAction } from '../reducers/address/actions'
export interface CoffeData {
  id: string
  coffeName: string
  orderQuantity: number
}

interface CafesContextType {
  addressData: AddressProps
  cafes: Coffe[]
  setAddressToDelivery: (data: AddressProps) => void
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
  const [addressState, dispatchAddress] = useReducer(addressReducer, {
    addressData: {
      cep: '',
      logradouro: '',
      uf: '',
      localidade: '',
      numero: '',
      bairro: '',
      complemento: '',
    },
  })
  const { addressData } = addressState
  const { cafes } = cafesState
  function setAddressToDelivery(addressData: AddressProps) {
    dispatchAddress(setAddressAction(addressData))
  }

  function addNewCoffe(data: CoffeData) {
    const newCoffe: Coffe = {
      id: data.id,
      coffeName: data.coffeName,
      orderQuantity: data.orderQuantity,
    }
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
        addressData,
        cafes,
        setAddressToDelivery,
        addNewCoffe,
        removeCoffe,
      }}
    >
      {children}
    </CafesContext.Provider>
  )
}
