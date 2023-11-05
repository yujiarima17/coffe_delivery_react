import { CafesContext } from '../../../../contexts/CafesContext'
import { ShoppingCartItem } from './components/ShoopingCartItem'
import { ShoppingCartBill } from './components/ShoppingCartBill'
import { ConfirmOrderContainer } from './styles'

import { useContext } from 'react'
interface ConfirmOrderProps {
  children: React.ReactNode
}
export function ConfirmOrder({ children }: ConfirmOrderProps) {
  const { cafes } = useContext(CafesContext)

  return (
    <>
      <ConfirmOrderContainer>
        {cafes.map((coffe) => (
          <ShoppingCartItem {...coffe} key={coffe.id} />
        ))}

        <ShoppingCartBill />
        {children}
      </ConfirmOrderContainer>
    </>
  )
}
