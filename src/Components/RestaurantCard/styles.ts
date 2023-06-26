import { styled } from 'styled-components'
import { color } from '../../styles'

export const Card = styled.div`
  width: 472px;
  height: 400px;
  position: relative;
  color: ${color.vermelho};
`

export const RestaurantInfo = styled.div`
  display: flex;
  position: absolute;
  top: 16px;
  right: 16px;
`

export const CardImg = styled.div`
  width: 472px;
  height: 217px;
`

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 8px;
  background-color: ${color.branco};
  font-size: 14px;
  font-weight: bold;
  line-height: 22px;
  border: 1px solid ${color.vermelho};
  border-top: none;
`

export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 16px;
  padding-top: 8px;

  span {
    height: 22px;
    display: flex;

    img {
      width: 21px;
      margin-left: 8px;
    }
  }
`
export const CardTextContent = styled.p`
  font-size: 14px;
  font-weight: bold;
  line-height: 22px;
`

export const Button = styled.button`
  font-size: 14px;
  font-weight: bold;
  margin-top: 16px;
  margin-bottom: 8px;
  width: 82px;
  height: 24px;
  padding: 4px 6px;
  color: ${color.creme};
  background-color: ${color.vermelho};
  border: none;
`
