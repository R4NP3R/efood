import { styled } from 'styled-components'

export const FoodContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;
  padding-top: 56px;
  padding-bottom: 120px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 60px;
    row-gap: 48px;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    padding-bottom: 60px;
    row-gap: 48px;
    column-gap: 12vw;
  }
`
