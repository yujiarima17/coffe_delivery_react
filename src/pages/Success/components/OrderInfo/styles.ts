import styled from 'styled-components'

export const OrderInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 40px;
  width: 32.875rem;
  flex: 1;
  justify-content: start;
`

export const Info = styled.div`
  display: flex;
  gap: 12px;
  color: ${(props) => props.theme['base-text']};
  overflow-wrap: break-word;
  font: ${(props) => props.theme.font['Text M-Regular']};
  span.importantInfo {
    font: ${(props) => props.theme.font['Text M-Bold']};
  }
`
