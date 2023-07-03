import { BrowserRouter } from 'react-router-dom'

import { GlobalCSS } from './styles'
import { Footer } from './Components/Footer'
import { Rotas } from './rotas'

function App() {
  return (
    <BrowserRouter>
      <GlobalCSS />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
