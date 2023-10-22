import { CompleteOrder } from './components/CompleteOrder'
import { ConfirmOrder } from './components/ConfirmOrder'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <div className="sub-container">
        <header>Complete seu pedido</header>
        <CompleteOrder></CompleteOrder>
      </div>

      <div className="sub-container">
        <header>Cafés Selecionados</header>
        <ConfirmOrder></ConfirmOrder>
      </div>
    </CheckoutContainer>
  )
}
