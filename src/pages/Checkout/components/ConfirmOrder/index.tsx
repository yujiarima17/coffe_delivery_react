import { ShoppingCartItem } from './components/ShoopingCartItem'
import { ShoppingCartBill } from './components/ShoppingCartBill'
import { ConfirmButton, ConfirmOrderContainer } from './styles'

export function ConfirmOrder() {
  return (
    <>
      <ConfirmOrderContainer>
        <ShoppingCartItem></ShoppingCartItem>
        <ShoppingCartItem></ShoppingCartItem>
        <ShoppingCartBill />
        <ConfirmButton>CONFIRMAR PEDIDO</ConfirmButton>
      </ConfirmOrderContainer>
    </>
  )
}
