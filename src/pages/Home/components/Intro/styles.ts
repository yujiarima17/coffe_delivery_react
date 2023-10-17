import styled from 'styled-components'

export const IntroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 34rem;
`
export const IntroInfo = styled.div`
  display: flex;
  width: 36.75rem;
  flex-direction: column;
  gap: 4rem;
  section.icons {
    display: flex;
    gap: 1rem;
    width: 36.43rem;
    flex-wrap: wrap;
  }
  section.intro-text {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    div.title {
      display: flex;
      font: ${(props) => props.theme.font['Title XL']};
      flex-direction: column;
      color: ${(props) => props.theme['base-title']};
    }
    div.subtitle {
      font: ${(props) => props.theme.font['Text L-Regular']};
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`
export const IntroIcons = styled.div<{ $iconBackgroundColor: string }>`
  display: flex;
  gap: 0.5rem;
  font: ${(props) => props.theme.font['Text M-Regular']};
  align-items: center;

  span {
    background: ${(props) => props.theme[props.$iconBackgroundColor]};
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    width: 32px;
  }
`
