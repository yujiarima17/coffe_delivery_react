import { IntroContainer, IntroIcons, IntroInfo } from './styles'
// eslint-disable-next-line import/no-absolute-path
import banner from '/assets/banner.svg'
import { ShoppingCart } from 'phosphor-react'
export function Intro() {
  return (
    <IntroContainer>
      <IntroInfo>
        <section className="intro-text">
          <div className="title">
            <p>Encontre o café perfeito</p>
            <p>para qualquer hora do dia</p>
          </div>

          <div className="subtitle">
            <p> Com o Coffe Delivery você recebe seu café onde estiver,a</p>
            <p>qualquer hora</p>
          </div>
        </section>
        <section className="icons">
          <IntroIcons $iconBackgroundColor="yellow-dark">
            <span>
              <ShoppingCart color="#FFFFFF" weight="fill" />
            </span>
            <p>Compra simples e segura</p>
          </IntroIcons>
          <IntroIcons $iconBackgroundColor="base-text">
            <span>
              <ShoppingCart color="#FFFFFF" weight="fill" />
            </span>
            <p>Embalagem mantém o café intacto</p>
          </IntroIcons>
          <IntroIcons $iconBackgroundColor="yellow">
            <span>
              <ShoppingCart color="#FFFFFF" weight="fill" />
            </span>
            <p>Entrega rápida e rastreada</p>
          </IntroIcons>
          <IntroIcons $iconBackgroundColor="purple">
            <span>
              <ShoppingCart color="#FFFFFF" weight="fill" />
            </span>
            <p>O café chega fresquinho até você</p>
          </IntroIcons>
        </section>
      </IntroInfo>

      <img src={banner} alt="" />
    </IntroContainer>
  )
}
