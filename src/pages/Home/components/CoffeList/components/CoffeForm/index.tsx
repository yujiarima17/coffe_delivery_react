import { ShoppingCartSimple } from 'phosphor-react'
import { Input } from '../../../../../../components/Input'
import { CoffeButton, CoffeFormContainer } from './styles'
import { useFormContext } from 'react-hook-form'

interface CoffeFormProps{
  children: React.ReactNode
}
export function CoffeForm({children}:CoffeFormProps) {
  const { register } = useFormContext()
  return (
    <CoffeFormContainer>
      <Input register={register} inputName='quantity' />
      <CoffeButton type="submit">
       {children}
      </CoffeButton>
    </CoffeFormContainer>
  )
}
