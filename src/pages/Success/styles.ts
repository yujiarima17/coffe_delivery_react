import styled from 'styled-components'
export const SucessContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 5rem;
  justify-content: space-between;
  align-items: flex-end;
`
export const SucessContainerHeader = styled.header`
  div.title {
    font: ${(props) => props.theme.font['Title L']};
    color: ${(props) => props.theme['yellow-dark']};
  }
  div.subtitle {
    font: ${(props) => props.theme.font['Text L-Regular']};
    color: ${(props) => props.theme['base-text']};
  }
`
export const SucessInfoContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 2rem;
`
