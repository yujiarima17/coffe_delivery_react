import {
  CoffeCardInfo,
  CoffeCardContainer,
  CoffeCardBuy,
  CoffeButton,
} from './styles'
import { coffeProps } from '../../../../../../data/cafes'
import { FormProvider, useForm } from 'react-hook-form'
import { CoffeForm } from '../CoffeForm'
import { ShoppingCartSimple } from 'phosphor-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext, useEffect } from 'react'
import * as zod from 'zod'
import { CafesContext } from '../../../../../../contexts/CafesContext'
interface AddCoffeData {
  orderQuantity: number
  orderQuantity1: number
}
export function CoffeCard({
  id,
  tag,
  coffeName,
  description,
  price,
  image,
}: coffeProps) {
  const { addNewCoffe, cafes } = useContext(CafesContext)
  const urlImage = `/src/assets/Type=${image}.svg`

  const addCoffeItemValidationSchema = zod.object({
    orderQuantity: zod
      .number()
      .min(1, 'One is the minimum')
      .max(20, 'Twenty is the maximum'),
  })
  const addCoffeForm = useForm<AddCoffeData>({
    resolver: zodResolver(addCoffeItemValidationSchema),
    defaultValues: { orderQuantity: 1 },
  })

  const { handleSubmit, reset } = addCoffeForm
  function handleAddCoffe(data: AddCoffeData) {
    console.log(data)
    const newData = { id, coffeName, orderQuantity: data.orderQuantity }

    addNewCoffe(newData)

    reset()
  }
  return (
    <CoffeCardContainer>
      <CoffeCardInfo>
        <img src={urlImage} alt="" />

        <div className="coffeType">
          {tag.map((tag) => (
            <span className="type">{tag}</span>
          ))}
        </div>
        <span className="coffeName">{coffeName}</span>
        <div className="coffeLabel">
          <span className="label">{description}</span>
        </div>
      </CoffeCardInfo>
      <CoffeCardBuy>
        <div className="coffePrice">
          R$ <span className="coffePriceAmount">{price}</span>
        </div>
        <form action="" onSubmit={handleSubmit(handleAddCoffe)}>
          <FormProvider {...addCoffeForm}>
            <CoffeForm />
          </FormProvider>
          <CoffeButton type="submit">
            <ShoppingCartSimple size={24} color="#FFFFFF" weight="fill" />
          </CoffeButton>
        </form>
      </CoffeCardBuy>
    </CoffeCardContainer>
  )
}
