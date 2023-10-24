import styled from 'styled-components'
export const CoffeButton = styled.button`
  display: flex;
  border: 0;
  outline: 0;
  justify-content: center;
  width: 38px;
  height: 38px;
  align-items: center;
  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme.white};
  border-radius: 8px;
`
export const CoffeFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`
