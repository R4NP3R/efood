import { useEffect, useState } from 'react'
import { Header } from '../../Components/Header'
import { RestaurantSection } from '../../Components/RestaurantSection'

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
  const [restaurants, setRestaurants] = useState<RestaurantClass[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  if (!restaurants) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header estaNaHome />
      <RestaurantSection restaurant={restaurants} />
    </>
  )
}
