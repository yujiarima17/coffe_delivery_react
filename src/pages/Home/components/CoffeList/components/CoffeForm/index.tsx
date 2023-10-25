import { Input } from '../../../../../../components/Input'
import { CoffeFormContainer } from './styles'
import { useFormContext } from 'react-hook-form'

export function CoffeForm() {
  const { register } = useFormContext()
  return (
    <CoffeFormContainer>
      <Input register={register} inputName="orderQuantity" />
    </CoffeFormContainer>
  )
}
