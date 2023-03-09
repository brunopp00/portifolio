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
import CapaPokedex from './assets/CapaPokedéx.png'
import CapaCalculadora from './assets/CapaCalculadora.png'
import CapaMario from './assets/CapaMario.png'
import CapaPrevisaoTempo from './assets/CapaPrevisaoTempo.png'
import { About } from './components/About/About'
import { Contatos } from './components/Contatos/Contatos'

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
      'Pokedéx',
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur ipsam recusandae iste. Autem cumque repudiandae molestias animi maxime, optio nulla possimus obcaecati iste, ab asperiores, vero quibusdam eligendi sunt.',
      CapaPokedex,
      'https://brunopp00.github.io/pokedex/',
      'https://github.com/brunopp00/pokedex',
    ],
    [
      5,
      'Previsão Tempo',
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur ipsam recusandae iste. Autem cumque repudiandae molestias animi maxime, optio nulla possimus obcaecati iste, ab asperiores, vero quibusdam eligendi sunt.',
      CapaPrevisaoTempo,
      'https://brunopp00.github.io/previsaodotempo/',
      'https://github.com/brunopp00/previsaodotempo',
    ],
    [
      6,
      'Calculadora',
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur ipsam recusandae iste. Autem cumque repudiandae molestias animi maxime, optio nulla possimus obcaecati iste, ab asperiores, vero quibusdam eligendi sunt.',
      CapaCalculadora,
      'https://brunopp00.github.io/calculadora/calculadora.html',
      'https://github.com/brunopp00/calculadora',
    ],
    [
      7,
      'Ignite DtMoney',
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur ipsam recusandae iste. Autem cumque repudiandae molestias animi maxime, optio nulla possimus obcaecati iste, ab asperiores, vero quibusdam eligendi sunt.',
      CapaIgniteDtMoney,
      'https://03-modulo-ignite-reactjs.vercel.app/',
      'https://github.com/brunopp00/DT-Money',
    ],
    [
      8,
      'Super Mario',
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur ipsam recusandae iste. Autem cumque repudiandae molestias animi maxime, optio nulla possimus obcaecati iste, ab asperiores, vero quibusdam eligendi sunt.',
      CapaMario,
      'https://brunopp00.github.io/SuperMario/',
      'https://github.com/brunopp00/SuperMario',
    ],
    [
      9,
      'Ignite Timer',
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur ipsam recusandae iste. Autem cumque repudiandae molestias animi maxime, optio nulla possimus obcaecati iste, ab asperiores, vero quibusdam eligendi sunt.',
      CapaIgniteTimer,
      'https://02-ignite-timer-seven.vercel.app/',
      'https://github.com/brunopp00/Ignite-Timer',
    ],
    [
      10,
      'Ignite ToDoList',
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur ipsam recusandae iste. Autem cumque repudiandae molestias animi maxime, optio nulla possimus obcaecati iste, ab asperiores, vero quibusdam eligendi sunt.',
      CapaIgniteToDoList,
      'https://desafio-modulo1-ignite-reactjs.vercel.app/',
      'https://github.com/brunopp00/Todo-list',
    ],
  ]
  const about = [
    [
      1,
      'Em 2020, durante a pandemia comecei meus estudos em HTML5 e CSS3 no Curso em Vídeo',
    ],
    [
      2,
      `Em 2021, comecei a me aprofundar em JavaScript e realizei meus primeiros mini-projetos, aquelas telas "feias" que todo programador já fez no início.`,
    ],
    [
      3,
      'Em 2022, consegui meu primeiro emprego na área de programação, na Unimed Vale do Cai. Quando comecei confesso que fiquei assustado porque não entendia nada do que o pessoal falava, pois eles usam React, e eu para falar a verdade nem sabia o que isso significava.',
    ],
    [
      4,
      'Em 2023, que por acaso é quando estou fazendo esse site, vejo que mesmo com apenas 1 ano de experiência de trabalho já adquiri muitos aprendizados e conhecimento.',
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
      <About about={about} />
      <Contatos />
    </div>
  )
}
