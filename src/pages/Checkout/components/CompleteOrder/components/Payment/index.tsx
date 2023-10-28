import { CurrencyDollar, CreditCard, Money, Bank } from 'phosphor-react'
import { Container, Header } from '../../styles'
import { PaymentOptionsContainer, PaymentOption } from './styles'
import { useState } from 'react'

export function Payment() {
  const [selectedOptions, setSelectedOptions] = useState({
    creditCard: false,
    debitCard: false,
    cash: false,
  })

  const toggleClass = (option: string) => {
    setSelectedOptions({
      ...selectedOptions,
      [option]: !selectedOptions[option],
    })
  }

  return (
    <Container>
      <Header>
        <CurrencyDollar size={22} color="#8047F8" />
        <div className="info">
          <span>Pagamento</span>
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </div>
      </Header>
      <PaymentOptionsContainer>
        <PaymentOption
          className={selectedOptions.creditCard ? 'selected' : ''}
          onClick={() => toggleClass('creditCard')}
        >
          <CreditCard size={16} color="#8047F8"></CreditCard>
          CARTÃO DE CRÉDITO
        </PaymentOption>
        <PaymentOption
          className={selectedOptions.debitCard ? 'selected' : ''}
          onClick={() => toggleClass('debitCard')}
        >
          <Money size={16} color="#8047F8"></Money>
          CARTÃO DE DÉBITO
        </PaymentOption>
        <PaymentOption
          className={selectedOptions.cash ? 'selected' : ''}
          onClick={() => toggleClass('cash')}
        >
          <Bank size={16} color="#8047F8"></Bank>
          DINHEIRO
        </PaymentOption>
      </PaymentOptionsContainer>
    </Container>
  )
}
