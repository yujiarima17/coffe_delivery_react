import { v4 as uuidv4 } from 'uuid'
export interface coffeProps {
  id: string
  tag: Array<string>
  description: string
  name: string
  price: number
  image: string
}
export const coffesData: Array<coffeProps> = [
  {
    id: uuidv4(),
    tag: ['TRADICIONAL'],
    description: 'O tradicional café feito com água quente  e grão moídos',
    name: 'Expresso Tradicional',
    price: 9.9,
    image: 'Expresso Tradicional',
  },
  {
    id: uuidv4(),
    tag: ['TRADICIONAL'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    name: 'Expresso Americano',
    price: 9.9,
    image: 'Expresso Americano',
  },
  {
    id: uuidv4(),
    tag: ['TRADICIONAL'],
    description: 'Café expresso tradicional com espuma cremosa',
    name: 'Expresso Cremoso',
    price: 9.9,
    image: 'Expresso Cremoso',
  },
  {
    id: uuidv4(),
    tag: ['TRADICIONAL', 'GELADO'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    name: 'Expresso Gelado',
    price: 9.9,
    image: 'Expresso Gelado',
  },
  {
    id: uuidv4(),
    tag: ['TRADICIONAL', 'COM LEITE'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    name: 'Café com Leite',
    price: 9.9,
    image: 'Café com Leite',
  },
  {
    id: uuidv4(),
    tag: ['TRADICIONAL', 'COM LEITE'],
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    name: 'Latte',
    price: 9.9,
    image: 'Latte',
  },
  {
    id: uuidv4(),
    tag: ['TRADICIONAL', 'COM LEITE'],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    name: 'Capuccino',
    price: 9.9,
    image: 'Capuccino',
  },
  {
    id: uuidv4(),
    tag: ['TRADICIONAL', 'COM LEITE'],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    name: 'Macchiato',
    price: 9.9,
    image: 'Macchiato',
  },
  {
    id: uuidv4(),
    tag: ['TRADICIONAL', 'COM LEITE'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    name: 'Mocaccino',
    price: 9.9,
    image: 'Mocaccino',
  },
  {
    id: uuidv4(),
    tag: ['ESPECIAL', 'COM LEITE'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    name: 'Chocolate Quente',
    price: 9.9,
    image: 'Chocolate Quente',
  },

  {
    id: uuidv4(),
    tag: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    name: 'Cubano',
    price: 9.9,
    image: 'Cubano',
  },

  {
    id: uuidv4(),
    tag: ['ESPECIAL'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    name: 'Havaiano',
    price: 9.9,
    image: 'Havaiano',
  },

  {
    id: uuidv4(),
    tag: ['ESPECIAL'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    name: 'Árabe',
    price: 9.9,
    image: 'Árabe',
  },

  {
    id: uuidv4(),
    tag: ['ESPECIAL', 'ALCOÓLICO'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    name: 'Irlandês',
    price: 9.9,
    image: 'Irlandês',
  },
]
