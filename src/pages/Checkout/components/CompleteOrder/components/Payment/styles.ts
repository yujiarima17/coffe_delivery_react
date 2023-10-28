import styled from 'styled-components'

export const PaymentOptionsContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: space-between;
`

export const PaymentOption = styled.div`
  display: flex;
  background: ${(props) => props.theme['base-button']};
  font: ${(props) => props.theme.font['Button M']};
  color: ${(props) => props.theme['base-text']};
  gap: 12px;
  padding: 16px;
  flex: 1;
  border-radius: 6px;
`
