import { useContext } from 'react'
import { ShoppingCartBillContainer } from './styles'
import { CafesContext } from '../../../../../../contexts/CafesContext'

export function ShoppingCartBill() {
  const { cafes } = useContext(CafesContext)
  const totalItens = cafes.reduce((prev, curr) => prev + curr.orderQuantity, 0)
  const valorTotal = totalItens * 9.9
  const valorEntrega = valorTotal * 0.1
  return (
    <ShoppingCartBillContainer>
      <div className="shoppingcartTopic">
        Total de itens <span>{totalItens}</span>
      </div>
      <div className="shoppingcartTopic">
        Entrega <span>R$ {valorEntrega.toFixed()}</span>
      </div>
      <div className="shoppingcartTopic">
        Total <span>R$ {valorTotal.toFixed()}</span>
      </div>
    </ShoppingCartBillContainer>
  )
}
