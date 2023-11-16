import { Input } from '../../../../../../components/Input'
import { CoffeFormContainer } from './styles'

interface CoffeFormProps {
  maxQuantity?: number
}
export function CoffeForm({ maxQuantity }: CoffeFormProps) {
  return (
    <CoffeFormContainer>
      <Input maxQuantity={maxQuantity} />
    </CoffeFormContainer>
  )
}
