import { styled } from 'styled-components'
import { color } from '../../styles'

export const Card = styled.div`
  width: 320px;
  height: 346px;
  border: 8px solid ${color.vermelho};
  background-color: ${color.vermelho};

  @media (max-width: 768px) {
    width: 100%;
    height: 375px;
  }

  @media (max-width: 1024px) {
    width: 100%;
    height: 100%;
  }
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
  color: ${color.creme};
  font-size: 16px;
  font-weight: 900;
  padding-bottom: 8px;
  padding-top: 8px;
`
export const CardTextContent = styled.p`
  width: 304px;
  height: 88px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: ${color.creme};
`

export const Button = styled.button`
  display: block;
  font-size: 14px;
  margin-top: 8px;
  font-weight: bold;
  height: 24px;
  padding: 4px 6px;
  color: ${color.vermelho};
  background-color: ${color.creme};
  border: none;
`
