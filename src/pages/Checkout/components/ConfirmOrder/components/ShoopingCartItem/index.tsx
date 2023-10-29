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
import { CoffeButton } from '../../../../../Home/components/CoffeList/components/CoffeCard/styles'
import { useContext } from 'react'
import { CafesContext } from '../../../../../../contexts/CafesContext'

interface ShoppingCartItemProps {
  id: string
  coffeName: string
  price: number
  orderQuantity: number
}
export function ShoppingCartItem({
  id,
  coffeName,
  price,
  orderQuantity,
}: ShoppingCartItemProps) {
  console.log(id, coffeName, price, orderQuantity)
  interface RemoveCoffeData {
    id: string
    coffeName: string
    orderQuantity: number
  }
  const { removeCoffe } = useContext(CafesContext)
  const removeCoffeItemValidationSchema = zod.object({
    orderQuantity: zod
      .number()
      .min(1)
      .max(20, 'The maximum number of items is twenty'),
  })
  const removeCoffeForm = useForm<RemoveCoffeData>({
    resolver: zodResolver(removeCoffeItemValidationSchema),
    defaultValues: {
      orderQuantity: 1,
    },
  })

  const { handleSubmit, reset } = removeCoffeForm
  function handleRemoveCoffe(data: RemoveCoffeData) {
    const newData = {
      id,
      coffeName,
      orderQuantity: data.orderQuantity,
      price,
    }
    removeCoffe(newData)

    reset()
  }
  const coffePrice = orderQuantity * price
  return (
    <>
      <ShoppingCartItemContainer>
        <div className="info">
          <img src="/src/assets/Type=Havaiano.svg" alt="" />
          <div className="details">
            <span>{coffeName}</span>
            <div className="coffeActions">
              <ShoppingCartForm
                action=""
                onSubmit={handleSubmit(handleRemoveCoffe)}
              >
                <FormProvider {...removeCoffeForm}>
                  <CoffeForm />
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
