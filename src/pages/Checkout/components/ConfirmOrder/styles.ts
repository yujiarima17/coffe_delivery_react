import styled from 'styled-components'

export const ConfirmOrderContainer = styled.div`
  display: flex;
  width: 28rem;
  flex-direction: column;
  height: fit-content;
  header {
    color: ${(props) => props.theme['base-subtitle']};
  }
  background-color: ${(props) => props.theme['base-card']};
  gap: 24px;
  padding: 40px;
  border-bottom-left-radius: 36px;
  border-top-right-radius: 36px;
`

export const RemoveButton = styled.button`
  display: flex;
  flex: 1;
  border: 0;
  outline: 0;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font: ${(props) => props.theme.font['Button M']};
  color: ${(props) => props.theme['base-text']};
  background: ${(props) => props.theme['base-button']};
`

export const Divider = styled.div`
  display: flex;
  background: ${(props) => props.theme['base-button']};
  height: 1px;
`
