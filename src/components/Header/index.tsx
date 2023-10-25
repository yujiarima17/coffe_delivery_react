import { HeaderContainer } from './styles'
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { CafesContext } from '../../contexts/CafesContext'
import { useContext } from 'react'
export function Header() {
  const {cafes} = useContext(CafesContext)
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <div className="info-bar">
        <span>
          <MapPin size={24} color="#8047F8" weight="fill" /> Porto Alegre, RS
        </span>
        <NavLink to="/checkout">
        
          <span className="itemsInCart">
            {cafes.length}
          </span>
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
