import { ShoppingCartSimple } from 'phosphor-react'
import { Input } from '../../../../../../components/Input'
import { CoffeButton, CoffeFormContainer } from './styles'

export function CoffeForm() {
  return (
    <CoffeFormContainer>
      <Input />
      <CoffeButton type="submit">
        <ShoppingCartSimple size={24} color="#FFFFFF" weight="fill" />
      </CoffeButton>
    </CoffeFormContainer>
  )
}
