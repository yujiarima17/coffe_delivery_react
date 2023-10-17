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
      line-height: 130%;
      flex-direction: column;
      font-size: 48px;
      font-family: 'Baloo 2', sans-serif;
      font-weight: bolder;
      color: ${(props) => props.theme['base-title']};
    }
    div.subtitle {
      line-height: 130%;
      font-size: 20px;
      font-family: 'Roboto', sans-serif;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`
export const IntroIcons = styled.div`
  display: flex;
  gap: 0.5rem;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  span {
    background: ${(props) => props.theme.purple};
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    width: 32px;
  }
`
