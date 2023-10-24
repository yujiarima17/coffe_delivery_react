import { CoffeCardInfo, CoffeCardContainer, CoffeCardBuy } from './styles'
import { coffeProps } from '../../../../../../data/cafes'
import * as zod from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CoffeForm } from '../CoffeForm'
export function CoffeCard({
  id,
  tag,
  name,
  description,
  price,
  image,
}: coffeProps) {
  const urlImage = `/src/assets/Type=${image}.svg`
  interface addCoffeData {
    quantity: number
  }
  const addCoffeItemValidationSchema = zod.object({
    quantity: zod
      .number()
      .min(1)
      .max(20, 'The maximum number of items is twenty'),
  })
  const addCoffeForm = useForm<addCoffeData>({
    resolver: zodResolver(addCoffeItemValidationSchema),
    defaultValues: {
      quantity: 1,
    },
  })
  // function handleAddCoffe(data: addCoffeData) {
  //   reset()
  // }
  const { handleSubmit, reset } = addCoffeForm
  return (
    <CoffeCardContainer>
      <CoffeCardInfo>
        <img src={urlImage} alt="" />

        <div className="coffeType">
          {tag.map((tag) => (
            <span className="type">{tag}</span>
          ))}
        </div>
        <span className="coffeName">{name}</span>
        <div className="coffeLabel">
          <span className="label">{description}</span>
        </div>
      </CoffeCardInfo>
      <CoffeCardBuy>
        <div className="coffePrice">
          R$ <span className="coffePriceAmount">{price}</span>
        </div>
        <form action="" onSubmit={handleSubmit(() => console.log('hello'))}>
          <FormProvider {...addCoffeForm}>
            <CoffeForm />
          </FormProvider>
        </form>
      </CoffeCardBuy>
    </CoffeCardContainer>
  )
}
