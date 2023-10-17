import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  height: 108px;
  align-items: center;
  justify-content: space-between;
  div.info-bar {
    display: flex;
    height: 38px;
    gap: 0.8rem;
    a {
      border-radius: 6px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 38px;
      background: ${(props) => props.theme['yellow-light']};
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
