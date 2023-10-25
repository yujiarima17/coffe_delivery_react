import { Minus, Plus } from 'phosphor-react'
import { CoffeSpanButton, CoffeInput, CoffeInputNumber } from './styles'
import { useState } from 'react'
import { FieldValues, UseFormRegister, useFormContext } from 'react-hook-form'

interface InputProps {
  register: UseFormRegister<FieldValues>
  inputName: string
  children: React.ReactNode
}
export function Input({ register, inputName, children }: InputProps) {
  const [quantity, setQuantity] = useState(register(inputName).value)
  const { setValue, register } = useFormContext()
  function plus() {
    setValue(inputName, quantity + 1)
    setQuantity((quantity) => quantity + 1)
  }
  function minus() {
    setValue(inputName, quantity - 1)
    setQuantity((quantity) => quantity - 1)
  }
  return (
    <CoffeFormContainer>
      <CoffeInput>
        <CoffeSpanButton onClick={minus}>
          <Minus size={16} />
        </CoffeSpanButton>
        <CoffeInputNumber
          max={20}
          placeholder="1"
          step={1}
          type="number"
          min={1}
          {...register(inputName, { valueAsNumber: true })}
        />
        <CoffeSpanButton onClick={plus}>
          <Plus size={16} />
        </CoffeSpanButton>
        {children}
      </CoffeInput>
    </CoffeFormContainer>
  )
}
