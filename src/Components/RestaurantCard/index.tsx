import * as S from './styles'
import star from '../../assets/images/estrela.svg'
import { Tag } from '../Tag'
import { Link } from 'react-router-dom'

type Props = {
  image: string
  title: string
  description: string
  note: number
  infos: string
  id: number
}

export const RestaurantCard = ({
  image,
  title,
  description,
  note,
  infos,
  id
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 272) {
      return descricao.slice(0, 275) + '...'
    }
    return descricao
  }
  return (
    <>
      <S.Card>
        <S.CardImg style={{ backgroundImage: `url(${image})` }}>
          <S.CardLink to={`/restaurant/${id}`} />
        </S.CardImg>

        <S.RestaurantInfo>
          <Tag key={infos}>{infos}</Tag>
        </S.RestaurantInfo>

        <S.CardText>
          <S.CardTitle>
            <h3>{title}</h3>
            <span>
              <p>{note}</p> <img src={star} alt="" />
            </span>
          </S.CardTitle>
          <S.CardTextContent>{getDescricao(description)}</S.CardTextContent>
          <S.Button to={`/restaurant/${id}`}>Saiba mais</S.Button>
        </S.CardText>
      </S.Card>
    </>
  )
}
