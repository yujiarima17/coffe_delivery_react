import styled from 'styled-components'

export const ShoppingCartBillContainer = styled.div`
  display: flex;
  color: ${(props) => props.theme['base-subtitle']};
  flex-direction: column;
  gap: 12px;
  div.shoppingcartTopic {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font: ${(props) => props.theme.font['Text S']};
    color: ${(props) => props.theme['base-text']};
  }
  &:last-child {
    font: ${(props) => props.theme.font['Text L-Bold']};
    color: ${(props) => props.theme['base-subtitle']};
  }
  .shoppingCartTotal {
    font: ${(props) => props.theme.font['Text L-Bold']};
    color: ${(props) => props.theme['base-subtitle']};
    display: flex;
    flex-direction: row;

    fieldset,
    input {
      font: ${(props) => props.theme.font['Text L-Bold']};
      display: flex;
      width: 50px;
      background: transparent;
      outline: 0;
      border: 0;
      justify-content: end;
      text-align: right;
    }
  }
`
