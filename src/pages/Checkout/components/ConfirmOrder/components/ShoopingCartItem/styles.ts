import styled from 'styled-components'
import { CoffeButton } from '../../../../../Home/components/CoffeList/components/CoffeCard/styles'

export const ShoppingCartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  .info {
    display: flex;
    gap: 20px;
    img {
      width: 64px;
      height: 64px;
    }
    .details {
      span {
        font: ${(props) => props.theme.font['Text M-Regular']};
      }
      .coffeActions {
        display: flex;
        gap: 8px;
      }
    }
    span {
      font: ${(props) => props.theme.font['Text M-Bold']};
    }
  }
`

export const ShoppingCartForm = styled.form`
  display: flex;
  gap: 8px;
`
export const ShoppingCartButton = styled(CoffeButton)`
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  padding: 0 8px;
  border-radius: 6px;
  gap: 4px;
  font: ${(props) => props.theme.font['Button M']};
`
