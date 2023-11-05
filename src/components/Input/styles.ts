import styled from 'styled-components'

export const CoffeInput = styled.div`
  display: flex;
  gap: 4px;
  padding: 8px;
  align-items: center;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
`
export const CoffeSpanButton = styled.span`
  display: flex;
  color: ${(props) => props.theme.purple};
  outline: 0;
  background: transparent;
  border: 0;
  &:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`
export const CoffeInputNumber = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  text-align: center;
  color: ${(props) => props.theme['base-title']};
  outline: 0;
  font: ${(props) => props.theme.font['Text M-Regular']};
  background: transparent;
  border: 0;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
export const CoffeFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`
