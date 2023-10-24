import { Trash } from 'phosphor-react'

import { Divider} from '../../styles'
import { ShoppingCartItemContainer } from './styles'
import { FormProvider } from 'react-hook-form'
import { CoffeForm } from '../../../../../Home/components/CoffeList/components/CoffeForm'
import { addCoffeForm } from '../../../../../Home/components/CoffeList/components/CoffeCard'

export function ShoppingCartItem() {
  return (
    <>
      <ShoppingCartItemContainer>
        <div className="info">
          <img src="/src/assets/Type=Havaiano.svg" alt="" />
          <div className="details">
            <span>Expresso Tradicional</span>
            <div className="coffeActions">
            <FormProvider {...addCoffeForm}>
            <CoffeForm >
            <Trash size={16} color="#8047F8" /> REMOVER
            </CoffeForm>
          </FormProvider>
              {/* <RemoveButton>
                <Trash size={16} color="#8047F8" /> REMOVER
              </RemoveButton> */}
            </div>
          </div>
        </div>
        <span>R$ 9,90</span>
      </ShoppingCartItemContainer>
      <Divider />
    </>
  )
}
