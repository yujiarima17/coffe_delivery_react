import styled from 'styled-components'

export const CoffeInput = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 38px;
  background: ${(props) => props.theme['base-button']};
  border-radius: 8px;
`
export const CoffeButton = styled.button`
  display: flex;
  color: ${(props) => props.theme.purple};
  outline: 0;
  background: transparent;
  border: 0;
`
export const CoffeInputNumber = styled.input`
  width: 14px;
  color: ${(props) => props.theme.purple};
  outline: 0;
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
