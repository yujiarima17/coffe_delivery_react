import { Trash } from 'phosphor-react'
import * as zod from 'zod'
import { Divider } from '../../styles'
import {
  ShoppingCartButton,
  ShoppingCartForm,
  ShoppingCartItemContainer,
} from './styles'
import { FormProvider, useForm } from 'react-hook-form'
import { CoffeForm } from '../../../../../Home/components/CoffeList/components/CoffeForm'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { CafesContext } from '../../../../../../contexts/CafesContext'

interface ShoppingCartItemProps {
  id: string
  coffeName: string
  price: number
  orderQuantity: number
}
interface RemoveCoffeData {
  orderQuantity: number
}
export function ShoppingCartItem({
  id,
  coffeName,
  price,
  orderQuantity,
}: ShoppingCartItemProps) {
  const { removeCoffe } = useContext(CafesContext)
  const removeCoffeItemValidationSchema = zod.object({
    orderQuantity: zod
      .number()
      .min(1, 'One is the minimum')
      .max(20, 'Twenty is the maximum'),
  })
  const removeCoffeForm = useForm<RemoveCoffeData>({
    resolver: zodResolver(removeCoffeItemValidationSchema),
  })
  function handleRemoveCoffe(data: RemoveCoffeData) {
    const newData = {
      id,
      coffeName,
      orderQuantity: data.orderQuantity,
      price,
    }
    removeCoffe(newData)
  }
  const { handleSubmit } = removeCoffeForm

  const coffePrice = orderQuantity * price
  return (
    <>
      <ShoppingCartItemContainer>
        <div className="info">
          <img src={`/src/assets/Type=${coffeName}.svg`} alt="" />
          <div className="details">
            <span>{coffeName}</span>
            <div className="coffeActions">
              <ShoppingCartForm
                action=""
                onSubmit={handleSubmit(handleRemoveCoffe)}
                id="shoppingCartForm"
              >
                <FormProvider {...removeCoffeForm}>
                  <CoffeForm></CoffeForm>
                </FormProvider>
                <ShoppingCartButton
                  type="submit"
                  form="shoppingCartForm"
                  name="button01"
                >
                  <Trash size={24} color="#8047F8" /> REMOVER
                </ShoppingCartButton>
              </ShoppingCartForm>
            </div>
          </div>
        </div>
        <span>R$ {coffePrice.toFixed(2)}</span>
      </ShoppingCartItemContainer>
      <Divider />
    </>
  )
}
