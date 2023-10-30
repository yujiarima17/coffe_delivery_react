import { HeaderContainer } from './styles'
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { CafesContext } from '../../contexts/CafesContext'
import { useContext } from 'react'
import { Coffe } from '../../reducers/cafes/reducer'
export function Header() {
  const { cafes, orderData } = useContext(CafesContext)
  function getCafesAmount(cafes: Coffe[]) {
    const cafesAmount = cafes.reduce(
      (accumulator, currentValue) => accumulator + currentValue.orderQuantity,
      0,
    )
    console.log(cafes)
    return cafesAmount
  }
  const cafesAmount = getCafesAmount(cafes)
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <div className="info-bar">
        <span>
          <MapPin size={24} color="#8047F8" weight="fill" />{' '}
          {orderData &&
            `${orderData.orderDestination.localidade}, ${orderData.orderDestination.uf}`}
        </span>
        <NavLink to="/checkout">
          <span className="itemsInCart">{cafesAmount}</span>
          <ShoppingCart size={24} color="#C47F17" weight="fill" />
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
