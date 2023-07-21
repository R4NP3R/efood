import { useState } from 'react'
import { CardapioItem, RestaurantClass } from '../../pages/home'
import { FoodContainer } from './styles'
import fechar from '../../assets/images/fechar.png'
import * as S from './styles'

type Props = {
  restaurant: RestaurantClass
}

interface ModalState extends CardapioItem {
  isVisible: boolean
}

export const FoodSection = ({ restaurant }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    descricao: '',
    foto: '',
    id: 0,
    nome: '',
    porcao: '',
    preco: 0
  })

  const formataPreco = (precoN = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(precoN)
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 178) {
      return descricao.slice(0, 178) + '...'
    }
    return descricao
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      descricao: '',
      foto: '',
      id: modal.id,
      nome: '',
      porcao: '',
      preco: 0
    })
  }

  if (!restaurant) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <S.RestaurantImage>
        <S.RestaurantImageDark
          style={{
            backgroundImage: `url(${restaurant.capa})`
          }}
        ></S.RestaurantImageDark>
        <S.RestaurantImageText className="container">
          <h3>{restaurant.tipo}</h3>
          <p>{restaurant.titulo}</p>
        </S.RestaurantImageText>
      </S.RestaurantImage>
      <FoodContainer className="container">
        {restaurant.cardapio.map((cardapio) => (
          <>
            <S.Card>
              <S.CardImg src={cardapio.foto} alt={`${cardapio.nome}`} />
              <S.CardText>
                <S.CardTitle>
                  <h3>{cardapio.nome}</h3>
                </S.CardTitle>
                <S.CardTextContent>
                  {getDescricao(cardapio.descricao)}
                </S.CardTextContent>
                <S.Button
                  onClick={() =>
                    setModal({
                      isVisible: true,
                      descricao: cardapio.descricao,
                      foto: cardapio.foto,
                      id: cardapio.id,
                      nome: cardapio.nome,
                      porcao: cardapio.porcao,
                      preco: cardapio.preco
                    })
                  }
                >
                  Mais Detalhes
                </S.Button>
              </S.CardText>
            </S.Card>
          </>
        ))}
        <S.Modal className={modal.isVisible ? 'visivel' : ''}>
          <S.ModalContent>
            <S.IconeFechar
              src={fechar}
              onClick={closeModal}
              alt="icone de fechar"
            />
            <S.ImagemComida src={modal.foto} alt={modal.nome} />
            <div>
              <S.TextSeparator>
                <h4>{modal.nome}</h4>
                <p>{modal.descricao}</p>
              </S.TextSeparator>
              <p>{`Serve de ${modal.porcao}`}</p>
              <S.Button>{`Adicionar ao Carrinho - ${formataPreco(
                modal.preco
              )}`}</S.Button>
            </div>
          </S.ModalContent>
          <div className="overlay" onClick={closeModal}></div>
        </S.Modal>
      </FoodContainer>
    </>
  )
}
