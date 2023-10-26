import styled from 'styled-components'
export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  padding-top: 32px;
  padding-bottom: 32px;
  align-items: center;
  justify-content: space-between;

  div.info-bar {
    display: flex;
    height: 38px;
    gap: 0.8rem;

    a {
      position: relative; /* Define o elemento pai como relativo */
      border-radius: 6px;
      display: flex;
      flex-direction: column;
      width: 38px;
      background: ${(props) => props.theme['yellow-light']};
      align-items: center;
      justify-content: center;

      span.itemsInCart {
        display: flex;
        align-items: center;
        position: absolute;
        top: -10px;
        right: -5px;
        border-radius: 9999px;
        justify-content: end;
        padding: 0.5px 4px;
        font: ${(props) => props.theme.font['Text S']};
        color: ${(props) => props.theme.white};
        background: ${(props) => props.theme['yellow-dark']};
      }
    }

    span {
      border-radius: 6px;
      display: flex;
      font: ${(props) => props.theme.font['Text S']};
      color: ${(props) => props.theme['purple-dark']};
      align-items: center;
      justify-content: space-between;
      gap: 0.1rem;
      padding: 10px;
      background: ${(props) => props.theme['purple-light']};
    }
  }
`
