import { styled } from 'styled-components'

export const Footer = styled.footer`
  flex-direction: column;

  div {
    display: flex;
    justify-content: center;
  }
`
export const Logo = styled.img`
  width: 125px;
  height: 58px;
  margin-top: 40px;
  margin-bottom: 32px;
`

export const SocialMediaList = styled.ul`
  display: flex;
  list-style: none;
  margin-bottom: 80px;
  li {
    margin-left: 8px;
  }
`

export const FooterText = styled.p`
  width: 480px;
  color: #e66767;
  text-align: center;

  margin-bottom: 40px;
  font-size: 10px;
`
