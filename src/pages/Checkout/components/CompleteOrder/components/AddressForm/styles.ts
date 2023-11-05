import styled from 'styled-components'

export const DeliveryForm = styled.div`
  display: flex;
  font: ${(props) => props.theme.font['Text S']};
  flex-direction: column;
  height: 216px;
  gap: 16px;
  section {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`

export const AddressContinuedInput = styled.div`
  display: flex;
  align-items: center;
  width: 348px;
  height: 42px;
  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};
  span {
    font-family: 'Roboto', sans-serif;
    font-style: italic;
    font-size: 12px;
    color: ${(props) => props.theme['base-label']};
    background: transparent;
  }
`

export const DeliveryFormInput = styled.input<{
  $width: string
}>`
  display: flex;
  outline: 0;
  border: 1.5px solid ${(props) => props.theme['base-button']};
  width: ${(props) => props.$width};
  height: 42px;
  background: ${(props) => props.theme['base-input']};
  border-radius: 4px;
  color: ${(props) => props.theme['base-text']};
  padding: 12px;
`
export const DeliveryFormInput2 = styled(DeliveryFormInput)`
  border: 0;
`
