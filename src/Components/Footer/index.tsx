import logo from '../../assets/images/logo.png'
import backgroundImage from '../../assets/images/fundo.png'
import * as S from './styles'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'
import instagram from '../../assets/images/instagram.svg'

export const Footer = () => (
  <S.Footer style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div>
      <S.Logo src={logo} alt="EFood" />
    </div>
    <div>
      <S.SocialMediaList>
        <li>
          <a href="">
            <img src={instagram} alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={facebook} alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={twitter} alt="" />
          </a>
        </li>
      </S.SocialMediaList>
    </div>
    <div>
      <S.FooterText>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{' '}
      </S.FooterText>
    </div>
  </S.Footer>
)
