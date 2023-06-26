import { styled } from 'styled-components'
import { color } from '../../styles'
import { Props } from '.'
import { Link } from 'react-router-dom'

export const Header = styled.header<Props>`
  display: flex;
  align-items: center;
  ${(props) =>
    props.estaNaHome ? 'flex-direction: column;' : 'justify-content: center;'};
  height: ${(props) => (props.estaNaHome ? '354px' : '186px')};
`
export const RestaurantImage = styled.div`
  position: relative;
  height: 100%;
`

export const RestaurantImageDark = styled.div`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  filter: brightness(0.5);
  position: relative;
`

export const RestaurantImageText = styled.div`
  h3 {
    position: absolute;
    top: 25px;
    font-weight: 100;
    font-size: 32px;
    color: ${color.branco};
  }

  p {
    position: absolute;
    bottom: 32px;
    font-size: 32px;
    font-weight: 900;
    color: ${color.branco};
  }
`

export const HeaderNavigation = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    list-style: none;

    li {
      display: flex;
      justify-content: center;
    }
  }
`

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
`

export const Logo = styled.img<Props>`
  width: 125px;
  height: 58px;
  margin-top: ${(props) => (props.estaNaHome ? '64px' : '0px')};
`

export const titleHeader = styled.h2<Props>`
  font-size: ${(props) => (props.estaNaHome ? '36px' : '18px')};
  color: ${color.vermelho};
  text-align: center;
  width: ${(props) => (props.estaNaHome ? '540px' : '100%')};
  margin-top: ${(props) => (props.estaNaHome ? '136px' : '0px')};
`
