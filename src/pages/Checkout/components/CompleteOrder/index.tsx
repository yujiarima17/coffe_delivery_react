import { AddressForm } from './components/AddressForm'
import { Payment } from './components/Payment'
import { CompleteOrderContainer } from './styles'

export function CompleteOrder() {
  return (
    <CompleteOrderContainer>
      <AddressForm></AddressForm>
      <Payment></Payment>
    </CompleteOrderContainer>
  )
}
