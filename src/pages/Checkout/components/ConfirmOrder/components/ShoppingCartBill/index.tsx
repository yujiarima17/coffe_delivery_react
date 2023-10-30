import { useContext } from 'react'
import { ShoppingCartBillContainer } from './styles'
import { CafesContext } from '../../../../../../contexts/CafesContext'
import { useFormContext } from 'react-hook-form'

export function ShoppingCartBill() {
  const { cafes } = useContext(CafesContext)
  const { register, setValue } = useFormContext()
  const totalItens = cafes.reduce((prev, curr) => prev + curr.orderQuantity, 0)
  const valorDosItens = totalItens * 9.9
  const valorEntrega = valorDosItens * 0.1
  const valorTotal = valorDosItens + valorEntrega
  return (
    <ShoppingCartBillContainer>
      <div className="shoppingcartTopic">
        Total de itens <span>{totalItens}</span>
      </div>
      <div className="shoppingcartTopic">
        Entrega <span>R$ {valorEntrega.toFixed()}</span>
      </div>
      <div className="shoppingcartTopic">
        Total
        <div className="shoppingCartTotal">
          R$
          <fieldset disabled>
            <input
              type="text"
              id="amount"
              {...register('amount', {
                valueAsNumber: true,
                value: valorTotal,
              })}
            />
          </fieldset>
        </div>
      </div>
    </ShoppingCartBillContainer>
  )
}
