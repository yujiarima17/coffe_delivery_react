import { Minus, Plus } from 'phosphor-react'
import { CoffeButton, CoffeInput, CoffeInputNumber } from './styles'
import { useState } from 'react'
import {FieldValues, UseFormRegister} from 'react-hook-form'
interface InputProps {
  register : UseFormRegister<FieldValues>
  inputName : string
}
export function Input({register,inputName}:InputProps) {
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
        {...register(inputName,{valueAsNumber:true})}
      />
      <CoffeButton onClick={minus}>
        <Minus size={16} />
      </CoffeButton>
    </CoffeInput>
  )
}
