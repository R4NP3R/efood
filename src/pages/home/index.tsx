import { Header } from '../../Components/Header'
import { RestaurantSection } from '../../Components/RestaurantSection'
import sushi from '../../assets/images/Hioki_Sushi.png'
import LaDolce from '../../assets/images/La_Dolce_Vita_Trattoria.png'
import { RestaurantClass } from '../../models/Restaurant'

const RestaurantList: RestaurantClass[] = [
  {
    image: sushi,
    title: 'Hioki Sushi',
    note: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushisfrescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque da semana', 'Japonesa']
  },
  {
    image: LaDolce,
    title: 'La Dolce Vita Trattoria',
    note: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana']
  },
  {
    image: sushi,
    title: 'Hioki Sushi',
    note: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushisfrescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque da semana', 'Japonesa']
  },
  {
    image: LaDolce,
    title: 'La Dolce Vita Trattoria',
    note: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana']
  },
  {
    image: sushi,
    title: 'Hioki Sushi',
    note: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushisfrescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque da semana', 'Japonesa']
  },
  {
    image: LaDolce,
    title: 'La Dolce Vita Trattoria',
    note: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana']
  }
]

export const Home = () => (
  <>
    <Header estaNaHome />
    <RestaurantSection restaurant={RestaurantList} />
  </>
)
