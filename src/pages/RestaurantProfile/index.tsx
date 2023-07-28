import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { Header } from '../../Components/Header'

import { FoodSection } from '../../Components/FoodSection'
import { useGetRestaurantFoodsQuery } from '../../services/api'

export const RestaurantProfile = () => {
  const { id } = useParams()
  const { data: foodSection } = useGetRestaurantFoodsQuery(id!)

  if (!foodSection) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header estanahome={false} />
      <FoodSection restaurant={foodSection} />
    </>
  )
}
