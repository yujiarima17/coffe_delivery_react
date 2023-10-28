import { CafesContext } from '../../../../contexts/CafesContext'
import { ShoppingCartItem } from './components/ShoopingCartItem'
import { ShoppingCartBill } from './components/ShoppingCartBill'
import { ConfirmButton, ConfirmOrderContainer } from './styles'

import { useContext } from 'react'

export function ConfirmOrder() {
  const { cafes } = useContext(CafesContext)
  return (
    <>
      <ConfirmOrderContainer>
        {cafes.map((coffe) => (
          <ShoppingCartItem
            id={coffe.id}
            coffeName={coffe.coffeName}
            key={coffe.id}
          />
        ))}

        <ShoppingCartBill />
        <ConfirmButton>CONFIRMAR PEDIDO</ConfirmButton>
      </ConfirmOrderContainer>
    </>
  )
}
