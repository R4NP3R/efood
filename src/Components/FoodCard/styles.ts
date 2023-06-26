import { styled } from 'styled-components'
import { color } from '../../styles'

export const Card = styled.div`
  width: 320px;
  height: 338px;
  border: 8px solid ${color.vermelho};
  background-color: ${color.vermelho};
`

export const CardImg = styled.img`
  width: 100%;
`

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: bold;
  line-height: 22px;
`

export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${color.branco};
  font-size: 16px;
  font-weight: 900;
  padding-bottom: 8px;
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
  width: 304px;
  height: 88px;
  font-size: 14px;
  font-weight: bold;
  line-height: 22px;
  color: ${color.branco};
`

export const Button = styled.button`
  display: block;
  font-size: 14px;
  font-weight: bold;
  height: 24px;
  padding: 4px 6px;
  color: ${color.vermelho};
  background-color: ${color.branco};
  border: none;
`
