import { RestaurantClass } from '../../models/Restaurant'
import { RestaurantCard } from '../RestaurantCard'
import { RestaurantContainer } from './styles'

type Props = {
  restaurant: RestaurantClass[]
}

export const RestaurantSection = ({ restaurant }: Props) => (
  <RestaurantContainer className="container">
    {restaurant.map((restaurant) => (
      <>
        <RestaurantCard
          key={restaurant.title}
          description={restaurant.description}
          image={restaurant.image}
          infos={restaurant.infos}
          note={restaurant.note}
          title={restaurant.title}
        />
      </>
    ))}
  </RestaurantContainer>
)
