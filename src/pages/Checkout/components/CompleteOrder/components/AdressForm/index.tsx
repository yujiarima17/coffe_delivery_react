import {
  AdressContinuedInput,
  DeliveryForm,
  DeliveryFormInput,
  DeliveryFormInput2,
} from './styles'
import { Header, Container } from '../../styles'
import { MapPinLine } from 'phosphor-react'
export function AdressForm() {
  return (
    <Container>
      <Header>
        <MapPinLine size={22} color="#574F4D" />
        <div className="info">
          <span>Endereço de Entrega</span>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </div>
      </Header>
      <DeliveryForm>
        <DeliveryFormInput $width="200px" placeholder="CEP" />
        <DeliveryFormInput $width="560px" placeholder="Rua" />
        <section>
          <DeliveryFormInput $width="200px" placeholder="Número" />
          <AdressContinuedInput>
            <DeliveryFormInput2 $width="348px" placeholder="Complemento" />
            <span>Opcional</span>
          </AdressContinuedInput>
        </section>
        <section>
          <DeliveryFormInput $width="200px" placeholder="Bairro" />
          <DeliveryFormInput $width="276px" placeholder="Cidade" />
          <DeliveryFormInput $width="60px" placeholder="UF" />
        </section>
      </DeliveryForm>
    </Container>
  )
}
