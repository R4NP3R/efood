import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CardapioItem, RestaurantClass } from '../pages/home'

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getRestaurant: builder.query<RestaurantClass[], void>({
      query: () => 'restaurantes'
    }),
    getRestaurantFoods: builder.query<RestaurantClass, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantQuery, useGetRestaurantFoodsQuery } = api
