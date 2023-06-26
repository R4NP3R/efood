import * as S from './styles'

type Props = {
  image: string
  title: string
  description: string
  id?: number
}

export const FoodCard = ({ image, title, description }: Props) => (
  <S.Card>
    <S.CardImg src={image} />

    <S.CardText>
      <S.CardTitle>
        <h3>{title}</h3>
      </S.CardTitle>
      <S.CardTextContent>{description}</S.CardTextContent>
      <S.Button>Adicionar ao Carrinho</S.Button>
    </S.CardText>
  </S.Card>
)
