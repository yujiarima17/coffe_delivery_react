import { CoffeCard } from './components/CoffeCard'
import { CoffeContainer } from './styles'
import { coffesData } from '../../../../data/cafes'
export function CoffeList() {
  return (
    <CoffeContainer>
      {coffesData.map((coffe) => {
        return <CoffeCard {...coffe} key={coffe.id}></CoffeCard>
      })}
    </CoffeContainer>
  )
}
