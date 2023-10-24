import { CoffeCardInfo, CoffeCardContainer, CoffeCardBuy } from './styles'
import { coffeProps } from '../../../../../../data/cafes'
import { FormProvider } from 'react-hook-form'
import { CoffeForm } from '../CoffeForm'
import { ShoppingCartSimple } from 'phosphor-react'
import { addCoffeForm } from '../../../../../../validators/CoffeValidator'
export function CoffeCard({
  id,
  tag,
  name,
  description,
  price,
  image,
}: coffeProps) {
  const urlImage = `/src/assets/Type=${image}.svg`
 
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
            <CoffeForm>
            <ShoppingCartSimple size={24} color="#FFFFFF" weight="fill" />
            </CoffeForm>
          </FormProvider>
        </form>
      </CoffeCardBuy>
    </CoffeCardContainer>
  )
}
