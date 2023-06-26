import { FoodSection } from '../../Components/FoodSection'
import { Header } from '../../Components/Header'
import { FoodsClass } from '../../models/Foods'
import pizza from '../../assets/images/pizza_marguerita.png'

const FoodList: FoodsClass[] = [
  {
    image: pizza,
    title: 'Pizza marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 1
  },
  {
    image: pizza,
    title: 'Pizza marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 2
  },
  {
    image: pizza,
    title: 'Pizza marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 3
  },
  {
    image: pizza,
    title: 'Pizza marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 4
  },
  {
    image: pizza,
    title: 'Pizza marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 5
  },
  {
    image: pizza,
    title: 'Pizza marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 6
  }
]

export const RestaurantProfile = () => (
  <>
    <Header estaNaHome={false} />
    <FoodSection foods={FoodList} />
  </>
)
