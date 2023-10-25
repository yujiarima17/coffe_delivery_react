import { Trash } from 'phosphor-react'
import * as zod from 'zod'
import { Divider } from '../../styles'
import { ShoppingCartItemContainer } from './styles'
import { FormProvider } from 'react-hook-form'
import { CoffeForm } from '../../../../../Home/components/CoffeList/components/CoffeForm'
import { zodResolver } from '@hookform/resolvers/zod'
import { coffeProps } from '../../../../../../data/cafes'

export function ShoppingCartItem({ id, coffeName }: coffeProps) {
  interface removeCoffeData {
    id: string
    coffeName: string
    orderQuantity: number
  }
  const removeCoffeItemValidationSchema = zod.object({
    quantity: zod
      .number()
      .min(1)
      .max(20, 'The maximum number of items is twenty'),
  })
  const removeCoffeForm = useForm<removeCoffeData>({
    resolver: zodResolver(removeCoffeItemValidationSchema),
    defaultValues: {
      orderQuantity: 1,
      id,
      coffeName,
    },
  })
  return (
    <>
      <ShoppingCartItemContainer>
        <div className="info">
          <img src="/src/assets/Type=Havaiano.svg" alt="" />
          <div className="details">
            <span>Expresso Tradicional</span>
            <div className="coffeActions">
              <FormProvider {...removeCoffeForm}>
                <CoffeForm>
                  <Trash size={16} color="#8047F8" /> REMOVER
                </CoffeForm>
              </FormProvider>
              {/* <RemoveButton>
                <Trash size={16} color="#8047F8" /> REMOVER
              </RemoveButton> */}
            </div>
          </div>
        </div>
        <span>R$ 9,90</span>
      </ShoppingCartItemContainer>
      <Divider />
    </>
  )
}
