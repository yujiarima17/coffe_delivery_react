import { Info, InfoContainer, OrderInfoContainer } from './styles'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { CafesContext } from '../../../../contexts/CafesContext'
import { useContext } from 'react'
export function OrderInfo() {
  const { orderData } = useContext(CafesContext)
  const { numero, bairro, localidade, logradouro, uf } =
    orderData.orderDestination
  const { payment } = orderData.orderBill
  return (
    <OrderInfoContainer>
      <InfoContainer>
        <MapPin weight="fill" color="#8047F8" size={32} />
        <Info>
          Entrega em {logradouro},{numero}
          <span>
            {bairro} - {localidade},{uf}
          </span>
        </Info>
      </InfoContainer>
      <InfoContainer>
        <Timer weight="fill" color="#DBAC2C" size={32} />
        <Info>
          Previsão de entrega
          <span className="importantInfo">20min - 30min</span>
        </Info>
      </InfoContainer>
      <InfoContainer>
        <CurrencyDollar weight="fill" color="#C47F17" size={32} />
        <Info>
          Pagamento na entrega
          <span className="importantInfo">{payment}</span>
        </Info>
      </InfoContainer>
    </OrderInfoContainer>
  )
}
