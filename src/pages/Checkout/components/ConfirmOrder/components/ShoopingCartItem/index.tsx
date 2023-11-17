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
  console.log(id, coffeName, price, orderQuantity)
  const { removeCoffe } = useContext(CafesContext)
  const removeCoffeItemValidationSchema = zod.object({
    orderQuantity: zod
      .number()
      .min(1, 'One is the minimum')
      .max(orderQuantity, 'Twenty is the maximum'),
  })
  const removeCoffeForm = useForm<RemoveCoffeData>({
    resolver: zodResolver(removeCoffeItemValidationSchema),
  })
  function handleRemoveCoffe(data: RemoveCoffeData) {
    console.log(data)
    const newData = {
      id,
      coffeName,
      orderQuantity: data.orderQuantity,
      price,
    }
    console.log(newData)
    removeCoffe(newData)
  }
  const { handleSubmit } = removeCoffeForm

  const coffePrice = orderQuantity * price
  return (
    <>
      <ShoppingCartItemContainer>
        <div className="info">
          <img src={`assets/Type=${coffeName}.svg`} alt="" />
          <div className="details">
            <span>{coffeName}</span>
            <div className="coffeActions">
              <ShoppingCartForm
                action=""
                onSubmit={handleSubmit(handleRemoveCoffe)}
                id="shoppingCartForm"
              >
                <FormProvider {...removeCoffeForm}>
                  <CoffeForm maxQuantity={orderQuantity}></CoffeForm>
                </FormProvider>
                <ShoppingCartButton type="submit">
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
