import { FoodsClass } from '../../models/Foods'
import { FoodCard } from '../FoodCard'
import { FoodContainer } from './styles'

type Props = {
  foods: FoodsClass[]
}

export const FoodSection = ({ foods }: Props) => (
  <FoodContainer className="container">
    {foods.map((foods) => (
      <FoodCard
        description={foods.description}
        image={foods.image}
        title={foods.title}
        key={foods.id}
      />
    ))}
  </FoodContainer>
)
