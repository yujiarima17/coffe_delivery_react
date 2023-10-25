import { Minus, Plus } from 'phosphor-react'
import { CoffeSpanButton, CoffeInput, CoffeInputNumber } from './styles'
import { useEffect, useState } from 'react'
import { FieldValues, UseFormRegister, useFormContext } from 'react-hook-form'

interface InputProps {
  register: UseFormRegister<FieldValues>
  inputName: string
}
export function Input({ register, inputName}: InputProps) {
  const {formState:{isSubmitSuccessful}} = useFormContext()
  const [quantity, setQuantity] = useState(1)
  function plus() {
    setQuantity((quantity) => quantity + 1)
  }
  function minus() {
    setQuantity((quantity) => quantity - 1)
  }
  useEffect(() => {
    // Use um efeito para atualizar o estado local quando o formulário for redefinido
    if (isSubmitSuccessful) {
      setQuantity(0);
    }
  }, [isSubmitSuccessful]);
  return (

      <CoffeInput>
        <CoffeSpanButton onClick={minus}>
          <Minus size={16} />
        </CoffeSpanButton>
        <CoffeInputNumber
         value={quantity}
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
      
      </CoffeInput>
    
  )
}
