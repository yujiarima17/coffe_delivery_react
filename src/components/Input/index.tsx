import { Minus, Plus } from 'phosphor-react'
import { CoffeButton, CoffeInput, CoffeInputNumber } from './styles'
import { useFormContext } from 'react-hook-form'
import { useState } from 'react'
export function Input() {
  const { register } = useFormContext()
  const [coffeQuantity, setCoffeQuantity] = useState(1)
  function plus() {
    setCoffeQuantity((coffeQuantity) => coffeQuantity + 1)
  }
  function minus() {
    setCoffeQuantity((coffeQuantity) => coffeQuantity - 1)
  }
  return (
    <CoffeInput>
      <CoffeButton onClick={plus}>
        <Plus size={16} />
      </CoffeButton>
      <CoffeInputNumber
        value={coffeQuantity}
        max={20}
        placeholder="1"
        step={1}
        type="number"
        min={1}
        {...(register('quantity'), { valueAsNumber: true })}
      />
      <CoffeButton onClick={minus}>
        <Minus size={16} />
      </CoffeButton>
    </CoffeInput>
  )
}
