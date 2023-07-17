import { RestaurantClass } from '../../pages/home'
import { RestaurantCard } from '../RestaurantCard'
import { RestaurantContainer } from './styles'

type Props = {
  restaurant: RestaurantClass[]
}

export const RestaurantSection = ({ restaurant }: Props) => {
  if (!restaurant) {
    return <h3>Carregando...</h3>
  }

  return (
    <RestaurantContainer className="container">
      {restaurant.map((restaurant) => (
        <>
          <RestaurantCard
            key={restaurant.id}
            description={restaurant.descricao}
            image={restaurant.capa}
            infos={restaurant.tipo}
            note={restaurant.avaliacao}
            title={restaurant.titulo}
            id={restaurant.id}
          />
        </>
      ))}
    </RestaurantContainer>
  )
}
