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
import { About } from './components/About/About'

export function App() {
  const listaProjetos = [
    [
      1,
      'Ignite Shop',
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur ipsam recusandae iste. Autem cumque repudiandae molestias animi maxime, optio nulla possimus obcaecati iste, ab asperiores, vero quibusdam eligendi sunt.',
      CapaIgniteShop,
      '#',
      'https://github.com/brunopp00/Ignite-Shop',
    ],
    [
      2,
      'Ignite Blog',
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur ipsam recusandae iste. Autem cumque repudiandae molestias animi maxime, optio nulla possimus obcaecati iste, ab asperiores, vero quibusdam eligendi sunt.',
      CapaIgniteBlog,
      '#',
      'https://github.com/brunopp00/GitHub-Blog',
    ],
    [
      3,
      'Ignite Coffee',
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur ipsam recusandae iste. Autem cumque repudiandae molestias animi maxime, optio nulla possimus obcaecati iste, ab asperiores, vero quibusdam eligendi sunt.',
      CapaIgniteCoffee,
      'https://02-desafio-ignite-reactjs.vercel.app/',
      'https://github.com/brunopp00/Coffe-Delivery',
    ],
    [
      4,
      'Ignite DtMoney',
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur ipsam recusandae iste. Autem cumque repudiandae molestias animi maxime, optio nulla possimus obcaecati iste, ab asperiores, vero quibusdam eligendi sunt.',
      CapaIgniteDtMoney,
      'https://03-modulo-ignite-reactjs.vercel.app/',
      'https://github.com/brunopp00/DT-Money',
    ],
    [
      5,
      'Ignite Timer',
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur ipsam recusandae iste. Autem cumque repudiandae molestias animi maxime, optio nulla possimus obcaecati iste, ab asperiores, vero quibusdam eligendi sunt.',
      CapaIgniteTimer,
      'https://02-ignite-timer-seven.vercel.app/',
      'https://github.com/brunopp00/Ignite-Timer',
    ],
    [
      6,
      'Ignite ToDoList',
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur ipsam recusandae iste. Autem cumque repudiandae molestias animi maxime, optio nulla possimus obcaecati iste, ab asperiores, vero quibusdam eligendi sunt.',
      CapaIgniteToDoList,
      'https://desafio-modulo1-ignite-reactjs.vercel.app/',
      'https://github.com/brunopp00/Todo-list',
    ],
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
      <About />
    </div>
  )
}
