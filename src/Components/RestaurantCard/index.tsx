import * as S from './styles'
import star from '../../assets/images/estrela.svg'
import { Tag } from '../Tag'

type Props = {
  image: string
  title: string
  description: string
  note: number
  infos: string[]
}

export const RestaurantCard = ({
  image,
  title,
  description,
  note,
  infos
}: Props) => (
  <S.Card>
    <S.CardImg style={{ backgroundImage: `url(${image})` }}></S.CardImg>
    <S.RestaurantInfo>
      {infos.map((infos) => (
        <Tag key={infos}>{infos}</Tag>
      ))}
    </S.RestaurantInfo>

    <S.CardText>
      <S.CardTitle>
        <h3>{title}</h3>
        <span>
          <p>{note}</p> <img src={star} alt="" />
        </span>
      </S.CardTitle>
      <S.CardTextContent>{description}</S.CardTextContent>
      <S.Button to="/restaurant">Saiba mais</S.Button>
    </S.CardText>
  </S.Card>
)
