import styled from 'styled-components'

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
