import { AdressForm } from './components/AdressForm'
import { Payment } from './components/Payment'
import { CompleteOrderContainer } from './styles'

export function CompleteOrder() {
  return (
    <CompleteOrderContainer>
      <AdressForm></AdressForm>
      <Payment></Payment>
    </CompleteOrderContainer>
  )
}
