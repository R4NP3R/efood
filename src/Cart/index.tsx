import * as S from './styles'
import { RootReducer } from '../store'
import { useDispatch, useSelector } from 'react-redux'
import { close, remove } from '../store/reducers/cart'
import { formataPreco } from '../Components/FoodSection'

export const Cart = () => {
  const { items, isOpen } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeCart = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((valortotal, valorinicial) => {
      return (valortotal += valorinicial.preco!)
    }, 0)
  }

  return (
    <S.CartContainer className={isOpen ? 'visivel' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.SideBar>
        <ul>
          {items.map((product) => (
            <S.CardItem key={product.id}>
              <div>
                <S.ProductImage src={product.foto} alt="" />
              </div>
              <div>
                <h3>{product.nome}</h3>
                <p>{formataPreco(product.preco)}</p>
              </div>
              <button onClick={() => removeCart(product.id)} />
            </S.CardItem>
          ))}
        </ul>
        <div>
          <S.Price>
            Valor Total
            <span>{formataPreco(getTotalPrice())}</span>
          </S.Price>
        </div>
        <S.BuyButton>Continuar com entrega</S.BuyButton>
      </S.SideBar>
    </S.CartContainer>
  )
}
