import { Info, OrderInfoContainer } from './styles'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
export function OrderInfo() {
  return (
    <OrderInfoContainer>
      <Info>
        <MapPin weight="fill" color="#8047F8" />
        Entrega em Rua João Daniel Martinelli,102 Farrapos - Porto Alegre,RS
      </Info>
      <Info>
        <Timer weight="fill" color="#DBAC2C" />
        Previsão de entrega
        <span className="importantInfo">20min - 30min</span>
      </Info>
      <Info>
        <CurrencyDollar weight="fill" color="#C47F17" />
        Pagamento na entrega
        <span className="importantInfo">Cartão de Crédito</span>
      </Info>
    </OrderInfoContainer>
  )
}
