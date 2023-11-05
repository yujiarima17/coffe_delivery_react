import styled from 'styled-components'

export const CompleteOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`
export const Header = styled.header`
  display: flex;
  gap: 8px;
  align-items: start;
  .infoHeader {
    display: flex;
    flex-direction: column;
    span:first-child {
      font: ${(props) => props.theme.font['Text M-Regular']};
      color: ${(props) => props.theme['base-subtitle']};
    }
    span:last-child {
      font: ${(props) => props.theme.font['Text S']};
      color: ${(props) => props.theme['base-text']};
    }
  }
`
export const Container = styled.div`
  display: flex;
  width: 40rem;
  gap: 32px;
  flex-direction: column;
  padding: 40px;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
`
