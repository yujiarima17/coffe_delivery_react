import { Info, OrderInfoContainer } from './styles'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { CafesContext } from '../../../../contexts/CafesContext'
import { useContext } from 'react'
export function OrderInfo() {
  const { orderData } = useContext(CafesContext)
  const destinationData = orderData.orderDestination
  return (
    <OrderInfoContainer>
      <Info>
        <MapPin weight="fill" color="#8047F8" />
        Entrega em {destinationData.logradouro},{destinationData.numero}
        {destinationData.bairro} - {destinationData.localidade},
        {destinationData.uf}
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
