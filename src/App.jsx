import { Header } from './components/Header/Header'
import './app.css'
import { Home } from './components/Home/Home'
import { Projects } from './components/Projetos/Projects'
import CapaIgniteShop from './assets/CapaIgniteShop.png'
export function App() {
  const listaProjetos = [[0, 'Ignite Shop', 'teste', CapaIgniteShop]]

  function handleClickMenu(menu) {
    const element = document.getElementById(menu)
    element.scrollIntoView()
  }
  return (
    <div className="App">
      <Header handleClickMenu={handleClickMenu} />
      <Home id="menu" />
      <Projects id="projetos" listaProjetos={listaProjetos} />
      {/* <div id="contatos"></div> */}
    </div>
  )
}
