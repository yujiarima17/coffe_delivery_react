import styled from 'styled-components'

export const ShoppingCartBillContainer = styled.div`
  display: flex;
  color: ${(props) => props.theme['base-subtitle']};
  flex-direction: column;
  gap: 12px;
  div.shoppingcartTopic {
    display: flex;
    justify-content: space-between;
    font: ${(props) => props.theme.font['Text S']};
    color: ${(props) => props.theme['base-text']};
  }
  &:last-child {
    font: ${(props) => props.theme.font['Text L-Bold']};
    color: ${(props) => props.theme['base-subtitle']};
  }
`
