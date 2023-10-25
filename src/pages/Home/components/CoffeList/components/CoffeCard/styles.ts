import styled from 'styled-components'

export const CoffeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 19.37rem;
  width: 16rem;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 36px;
  border-top-right-radius: 36px;
  background: ${(props) => props.theme['base-card']};
`
export const CoffeCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  img {
    margin-top: -20px;
    width: 120px;
    height: 120px;
  }
  div.coffeType {
    display: flex;
    gap: 0.5rem;
    span.type {
      display: flex;
      background: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};
      font: ${(props) => props.theme.font.Tag};
      height: 21px;
      width: 81px;
      align-items: center;
      justify-content: center;
      border-radius: 15px;
    }
  }
  span.coffeName {
    color: ${(props) => props.theme['base-subtitle']};
    font: ${(props) => props.theme.font['Title S']};
  }
  div.coffeLabel {
    display: flex;
    flex-direction: column;
    align-items: center;
    span.label {
      width: 216px;
      overflow-wrap: break-word;
      text-align: center;
      color: ${(props) => props.theme['base-label']};
      font: ${(props) => props.theme.font['Text S']};
    }
  }
`
export const CoffeCardBuy = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  div.coffePrice {
    display: flex;
    color: ${(props) => props.theme['base-text']};
    font: ${(props) => props.theme.font['Text S']};
    justify-content: space-between;
    align-items: baseline;
    gap: 0.2rem;
    span.coffePriceAmount {
      font: ${(props) => props.theme.font['Title M']};
      color: ${(props) => props.theme['base-text']};
    }
  }
  form {
    display: flex;
    gap: 8px;
  }
`
export const CoffeButton = styled.button`
  display: flex;
  border: 0;
  outline: 0;
  justify-content: center;
  width: 38px;
  height: 38px;
  align-items: center;
  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme.white};
  border-radius: 8px;
`
