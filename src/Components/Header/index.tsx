import * as S from './styles'
import logo from '../../assets/images/logo.png'
import backgroundImage from '../../assets/images/fundo.png'
import LaDolce from '../../assets/images/LaDolceHeader.png'

export type Props = {
  estaNaHome: boolean
}

export const Header = ({ estaNaHome }: Props) => {
  return (
    <>
      {estaNaHome ? (
        <S.Header
          estaNaHome={estaNaHome}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <S.LogoLink to="/">
            <S.Logo estaNaHome={estaNaHome} src={logo} alt="EFood" />
          </S.LogoLink>
          <S.DivtitleHeader>
            <S.titleHeader estaNaHome={estaNaHome}>
              Viva experiências gastronômicas no conforto da sua casa
            </S.titleHeader>
          </S.DivtitleHeader>
        </S.Header>
      ) : (
        <>
          <S.Header
            estaNaHome={estaNaHome}
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <S.HeaderNavigation className="container">
              <ul>
                <li>
                  <S.titleHeader estaNaHome={estaNaHome}>
                    Restaurantes
                  </S.titleHeader>
                </li>
                <li>
                  <S.LogoLink to="/">
                    <S.Logo estaNaHome={estaNaHome} src={logo} alt="EFood" />
                  </S.LogoLink>
                </li>
                <li>
                  <S.titleHeader estaNaHome={estaNaHome}>
                    0 produto(s) no carrinho
                  </S.titleHeader>
                </li>
              </ul>
            </S.HeaderNavigation>
          </S.Header>
          <S.RestaurantImage>
            <S.RestaurantImageDark
              style={{
                backgroundImage: `url(${LaDolce})`
              }}
            ></S.RestaurantImageDark>
            <S.RestaurantImageText className="container">
              <h3>Italiana</h3>
              <p>La Dolce Vita Trattoria</p>
            </S.RestaurantImageText>
          </S.RestaurantImage>
        </>
      )}
    </>
  )
}

{
  /* <S.Header style={{ backgroundImage: `url(${backgroundImage})` }}>
      <S.Logo src={logo} alt="EFood" />
      <S.titleHeader>
        Viva experiências gastronômicas no conforto da sua casa
      </S.titleHeader>
    </S.Header> */
}
