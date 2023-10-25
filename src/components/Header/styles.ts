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
      border-radius: 6px;
      display: flex;
      flex-direction: column;
      width: 38px;
      background: ${(props) => props.theme['yellow-light']};
      span.itemsInCart{ 
        display: flex;
        margin-top: -10px;
        margin-right: -10px;
        justify-content: end;
        padding: 0;
        color: ${(props) => props.theme.white};
        background: ${(props) => props.theme['yellow-light']};
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
