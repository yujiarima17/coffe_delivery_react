import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: grid;
  margin-top: 3rem;
  grid-column-gap: 1rem;
  grid-template-columns: 640px 1fr;
  .sub-container {
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    justify-content: start;
    header {
      font: ${(props) => props.theme.font['Title XS']};
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`
