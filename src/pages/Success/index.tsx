// eslint-disable-next-line import/no-absolute-path
import DeliveryIllustration from '/assets/delivery_illustration.svg'

import {
  SucessContainer,
  SucessContainerHeader,
  SucessInfoContainer,
} from './styles'
import { OrderInfo } from './components/OrderInfo'

export function Success() {
  return (
    <SucessContainer>
      <SucessInfoContainer>
        <SucessContainerHeader>
          <div className="title">Uhu!Pedido Confirmado</div>
          <div className="subtitle">
            Agora é só aguardar que logo o café chegará até você
          </div>
        </SucessContainerHeader>
        <OrderInfo />
      </SucessInfoContainer>
      <img src={DeliveryIllustration} alt="" />
    </SucessContainer>
  )
}
