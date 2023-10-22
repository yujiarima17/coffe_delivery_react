import { Trash } from 'phosphor-react'

import { Divider, RemoveButton } from '../../styles'
import { ShoppingCartItemContainer } from './styles'
import { Input } from '../../../../../../components/Input'

export function ShoppingCartItem() {
  return (
    <>
      <ShoppingCartItemContainer>
        <div className="info">
          <img src="/src/assets/Type=Havaiano.svg" alt="" />
          <div className="details">
            <span>Expresso Tradicional</span>
            <div className="coffeActions">
              <Input />
              <RemoveButton>
                <Trash size={16} color="#8047F8" /> REMOVER
              </RemoveButton>
            </div>
          </div>
        </div>
        <span>R$ 9,90</span>
      </ShoppingCartItemContainer>
      <Divider />
    </>
  )
}
