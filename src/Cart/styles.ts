import { styled } from 'styled-components'
import { color } from '../styles'
import Lixeira from '../assets/images/lixeira.png'

export const CartContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: none;
  flex-direction: row-reverse;
  top: 0;
  left: 0;
  z-index: 1;

  &.visivel {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.7;
  z-index: 1;
`

export const SideBar = styled.aside`
  width: 360px;
  height: 100%;
  background-color: ${color.vermelho};
  z-index: 1;
  padding: 32px 8px;
`

export const CardItem = styled.li`
  position: relative;
  display: flex;
  background-color: ${color.creme};
  padding: 8px 8px 12px 8px;
  margin-bottom: 16px;

  h3 {
    color: ${color.vermelho};
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  p {
    color: ${color.vermelho};
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }

  > button {
    position: absolute;
    bottom: 8px;
    right: 8px;
    width: 16px;
    height: 16px;
    background-image: url(${Lixeira});
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`

export const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 8px;
`

export const Price = styled.p`
  display: flex;
  margin-top: 40px;
  margin-bottom: 16px;
  justify-content: space-between;
  color: #ffebd9;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const BuyButton = styled.button`
  width: 100%;
  display: flex;
  padding: 4px 0px;
  justify-content: center;
  display: block;
  background-color: ${color.creme};
  color: ${color.vermelho};
  border: none;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
`
