import { ShoppingCartBillContainer } from './styles'

export function ShoppingCartBill() {
  return (
    <ShoppingCartBillContainer>
      <div className="shoppingcartTopic">
        Total de itens <span>R$ 29,70</span>
      </div>
      <div className="shoppingcartTopic">
        Entrega <span>R$ 3,50</span>
      </div>
      <div className="shoppingcartTopic">
        Total <span>R$ 33,20</span>
      </div>
    </ShoppingCartBillContainer>
  )
}
