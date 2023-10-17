import { HeaderContainer } from './styles'
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <div className="info-bar">
        <span>
          <MapPin size={24} color="#8047F8" weight="fill" /> Porto Alegre, RS
        </span>
        <NavLink to="/checkout">
          <ShoppingCart size={24} color="#C47F17" weight="fill" />
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
