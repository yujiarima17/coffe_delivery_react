import { CurrencyDollar, CreditCard, Money, Bank } from 'phosphor-react'
import { Container, Header } from '../../styles'
import { PaymentOptionsContainer, PaymentOption } from './styles'
import { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
export function Payment() {
  useEffect(() => {
    register('payment', { required: true })
  }, [register])
  const { register, setValue } = useFormContext()
  interface SelectedOptions {
    'Cartão de Crédito': boolean
    'Cartão de Débito': boolean
    Dinheiro: boolean
  }

  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({
    'Cartão de Crédito': false,
    'Cartão de Débito': false,
    Dinheiro: false,
  })

  const toggleClass = (option: string) => {
    setSelectedOptions({
      ...selectedOptions,
      [option]: !selectedOptions[option],
    })
    setValue('payment', option)
  }

  return (
    <Container>
      <Header>
        <CurrencyDollar size={22} color="#8047F8" />
        <div className="infoHeader">
          <span>Pagamento</span>
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </div>
      </Header>
      <PaymentOptionsContainer>
        <PaymentOption
          className={selectedOptions['Cartão de Crédito'] ? 'selected' : ''}
          onClick={() => toggleClass('Cartão de Crédito')}
        >
          <CreditCard size={16} color="#8047F8"></CreditCard>
          CARTÃO DE CRÉDITO
        </PaymentOption>
        <PaymentOption
          className={selectedOptions['Cartão de Débito'] ? 'selected' : ''}
          onClick={() => toggleClass('Cartão de Débito')}
        >
          <Money size={16} color="#8047F8"></Money>
          CARTÃO DE DÉBITO
        </PaymentOption>
        <PaymentOption
          className={selectedOptions.Dinheiro ? 'selected' : ''}
          onClick={() => toggleClass('Dinheiro')}
        >
          <Bank size={16} color="#8047F8"></Bank>
          DINHEIRO
        </PaymentOption>
      </PaymentOptionsContainer>
    </Container>
  )
}
