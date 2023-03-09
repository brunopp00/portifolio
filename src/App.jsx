import { Header } from './components/Header/Header'
import './app.css'
import { Home } from './components/Home/Home'
import { Projects } from './components/Projetos/Projects'
import CapaIgniteShop from './assets/CapaIgniteShop.png'
import CapaIgniteBlog from './assets/CapaIgniteBlog.png'
import CapaIgniteCoffee from './assets/CapaIgniteCoffee.png'
import CapaIgniteDtMoney from './assets/CapaIgniteDtMoney.png'
import CapaIgniteTimer from './assets/CapaIgniteTimer.png'
import CapaIgniteToDoList from './assets/CapaIgniteToDoList.png'

export function App() {
  const listaProjetos = [
    [0, 'Ignite Shop', 'teste', CapaIgniteShop],
    [0, 'Ignite Blog', 'teste', CapaIgniteBlog],
    [0, 'Ignite Coffee', 'teste', CapaIgniteCoffee],
    [0, 'Ignite DtMoney', 'teste', CapaIgniteDtMoney],
    [0, 'Ignite Timer', 'teste', CapaIgniteTimer],
    [0, 'Ignite TodoList', 'teste', CapaIgniteToDoList],
  ]

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
