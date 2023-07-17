import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { Header } from '../../Components/Header'

import { FoodSection } from '../../Components/FoodSection'

import { RestaurantClass } from '../home'

export const RestaurantProfile = () => {
  const { id } = useParams()
  const [foodSection, setFoodSection] = useState<RestaurantClass>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setFoodSection(res))
  }, [id])

  if (!foodSection) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header estaNaHome={false} />
      <FoodSection restaurant={foodSection} />
    </>
  )
}
