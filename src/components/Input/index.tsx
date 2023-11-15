import { Minus, Plus } from 'phosphor-react'
import { CoffeSpanButton, CoffeInput, CoffeInputNumber } from './styles'
import { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'

export interface InputProps{
  maxQuantity?:number
}
export function Input({maxQuantity}:InputProps) {
  const {
    formState: { isSubmitSuccessful },
    register,
    setValue,
  } = useFormContext()
  const [quantity, setQuantity] = useState(1)
  function plus() {
    const newQuantity = quantity + 1
    setQuantity(newQuantity)
    setValue('orderQuantity', newQuantity) // Atualize o valor com setValue
  }

  function minus() {
    const newQuantity = quantity - 1
    setQuantity(newQuantity)
    setValue('orderQuantity', newQuantity) // Atualize o valor com setValue
  }

  useEffect(() => {
    // Use um efeito para atualizar o estado local quando o formulário for redefinido
    if (isSubmitSuccessful) {
      setQuantity(1)
    }
  }, [isSubmitSuccessful])

  return (
    <CoffeInput>
      <CoffeSpanButton onClick={minus}>
        <Minus size={14} />
      </CoffeSpanButton>
      <CoffeInputNumber
        id="orderQuantity"
        value={quantity}
        max={maxQuantity ?? 20 }
        placeholder="1"
        step={1}
        type="number"
        min={1}
        {...register('orderQuantity', { valueAsNumber: true })}
      />
      <CoffeSpanButton onClick={plus}>
        <Plus size={14} />
      </CoffeSpanButton>
    </CoffeInput>
  )
}
