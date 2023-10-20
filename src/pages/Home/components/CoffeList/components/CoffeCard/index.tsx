import { CoffeCardInfo, CoffeCardContainer, CoffeCardBuy } from './styles'
import { coffeProps } from '../../../../../../data/cafes'
export function CoffeCard({
  id,
  tag,
  name,
  description,
  price,
  image,
}: coffeProps) {
  const urlImage = `/src/assets/Type=${image}.svg`

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
      </CoffeCardBuy>
    </CoffeCardContainer>
  )
}
