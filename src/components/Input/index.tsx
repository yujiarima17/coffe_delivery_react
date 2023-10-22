import { Minus, Plus } from 'phosphor-react'
import { CoffeButton, CoffeInput, CoffeInputNumber } from './styles'

export function Input() {
  return (
    <CoffeInput>
      <CoffeButton>
        <Plus size={16} />
      </CoffeButton>
      <CoffeInputNumber type="number" min={1} />
      <CoffeButton>
        <Minus size={16} />
      </CoffeButton>
    </CoffeInput>
  )
}
