import styled from 'styled-components'
export const SucessContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 5rem;
  justify-content: space-between;
`
export const SucessContainerHeader = styled.header`
  div.title {
    color: ${(props) => props.theme['yellow-dark']};
    font: ${(props) => props.theme.font['Title L']};
  }
  div.subtitle {
    color: ${(props) => props.theme['base-subtitle']};
    font: ${(props) => props.theme.font['Text L-Regular']};
  }
`
export const SucessInfoContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: start;
`
