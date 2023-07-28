import { useEffect, useState } from 'react'
import { Header } from '../../Components/Header'
import { RestaurantSection } from '../../Components/RestaurantSection'
import { useGetRestaurantQuery } from '../../services/api'

export interface CardapioItem {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export interface RestaurantClass {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: CardapioItem[]
}

export const Home = () => {
  const { data: restaurants } = useGetRestaurantQuery()

  if (!restaurants) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header estanahome />
      <RestaurantSection restaurant={restaurants} />
    </>
  )
}
