import { CoffeCardInfo, CoffeCardContainer, CoffeCardBuy } from './styles'
import coffeImage from '../../../../../../assets/Type=Capuccino.svg'
export function CoffeCard() {
  return (
    <CoffeCardContainer>
      <CoffeCardInfo>
        <img src={coffeImage} alt="" />
        <div className="coffeType">
          <span className="type">TRADICIONAL</span>
          <span className="type">COM LEITE</span>
        </div>
        <span className="coffeName">Café com Leite</span>
        <div className="coffeLabel">
          <span className="label">Meio a meio de expresso</span>
          <span className="label">tradicional com leite vaporizado</span>
        </div>
      </CoffeCardInfo>
      <CoffeCardBuy>
        <div className="coffePrice">
          R$ <span className="coffePriceAmount">9,90</span>
        </div>
      </CoffeCardBuy>
    </CoffeCardContainer>
  )
}
