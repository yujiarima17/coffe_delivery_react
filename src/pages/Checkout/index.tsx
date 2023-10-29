import { FormProvider, useForm } from 'react-hook-form'
import { CompleteOrder } from './components/CompleteOrder'
import { ConfirmOrder } from './components/ConfirmOrder'
import { CheckoutContainer, ConfirmButton } from './styles'
import { OrderFormValidator, OrderDataProps } from '../../validator/Order'
import { zodResolver } from '@hookform/resolvers/zod'
import { CafesContext } from '../../contexts/CafesContext'
import { useContext } from 'react'
export function Checkout() {
  const { setOrderData } = useContext(CafesContext)
  const orderForm = useForm<OrderDataProps>({
    resolver: zodResolver(OrderFormValidator),
  })
  const { handleSubmit, watch, formState } = orderForm
  function handleOrderSubmit(orderData: OrderDataProps) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { amount, ...orderDestinationObject } = orderData
    setOrderData({
      orderDestination: orderDestinationObject,
      orderBill: { amount: orderData.amount, payment: '10' },
    })
  }
  console.log(formState.errors)
  return (
    <form action="" id="orderForm" onSubmit={handleSubmit(handleOrderSubmit)}>
      <CheckoutContainer>
        <div className="sub-container">
          <header>Complete seu pedido</header>
          <FormProvider {...orderForm}>
            <CompleteOrder></CompleteOrder>
          </FormProvider>
        </div>

        <div className="sub-container">
          <header>Cafés Selecionados</header>
          <FormProvider {...orderForm}>
            <ConfirmOrder>
              <ConfirmButton type="submit" form="orderForm">
                CONFIRMAR PEDIDO
              </ConfirmButton>
            </ConfirmOrder>
          </FormProvider>
        </div>
      </CheckoutContainer>
    </form>
  )
}
