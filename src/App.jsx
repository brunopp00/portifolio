import { Header } from './components/Header'
import './app.css'
import { Home } from './components/Home/Home'
import { Projects } from './components/Projects'
import PreviewIgniteCoffee from './assets-preview/coffee.png'
import PreviewPokedex from './assets-preview/pokedex.png'
import PreviewPrevisao from './assets-preview/previsao-tempo.png'
import PreviewDtMoney from './assets-preview/dtmoney.png'
import PreviewIgniteTimer from './assets-preview/ignite-timer.png'
import PreviewIgniteTodo from './assets-preview/ignite-todo.png'
import PreviewAndroid from './assets-preview/android.png'
import PreviewIgniteFeed from './assets-preview/ignite-feed.png'
import PreviewDesign from './assets-preview/design-system.png'
import PreviewIgniteCall from './assets-preview/ignite-call.png'
import PreviewEsgotamento from './assets-preview/esgotamento.png'
import PreviewIgniteShop from './assets-preview/ignite-shop.png'
import PreviewIgniteBlog from './assets-preview/ignite-blog.png'

import {
  BiLogoCss3,
  BiLogoFigma,
  BiLogoGithub,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoLinkedin,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoTypescript,
} from 'react-icons/bi'
import { BsTelephone } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { SiStorybook } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { About } from './components/About'
import { Contatos } from './components/Contatos'
import { Abilities } from './components/Abilities'

export function App() {
  const listaProjetos = [
    {
      id: 1,
      name: 'Ignite Shop',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur ipsam recusandae iste. Autem cumque repudiandae molestias animi maxime, optio nulla possimus obcaecati iste, ab asperiores, vero quibusdam eligendi sunt.',
      image: PreviewIgniteShop,
      urlSite: '',
      urlGitHub: 'https://github.com/brunopp00/Ignite-Shop',
      icons: [
        <BiLogoReact key={1} size={20} />,
        <BiLogoNodejs key={2} size={20} />,
        <BiLogoTypescript key={3} size={20} />,
        <BiLogoHtml5 key={4} size={20} />,
        <BiLogoCss3 key={5} size={20} />,
        <TbBrandNextjs key={6} size={20} />,
        <BiLogoFigma key={7} size={20} />,
      ],
    },
    {
      id: 2,
      name: 'Ignite Blog',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur ipsam recusandae iste. Autem cumque repudiandae molestias animi maxime, optio nulla possimus obcaecati iste, ab asperiores, vero quibusdam eligendi sunt.',
      image: PreviewIgniteBlog,
      urlSite: '',
      urlGitHub: 'https://github.com/brunopp00/GitHub-Blog',
      icons: [
        <BiLogoReact key={1} size={20} />,
        <BiLogoNodejs key={2} size={20} />,
        <BiLogoTypescript key={3} size={20} />,
        <BiLogoHtml5 key={4} size={20} />,
        <BiLogoCss3 key={5} size={20} />,
        <BiLogoFigma key={6} size={20} />,
      ],
    },
    {
      id: 3,
      name: 'Ignite Coffee',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur ipsam recusandae iste. Autem cumque repudiandae molestias animi maxime, optio nulla possimus obcaecati iste, ab asperiores, vero quibusdam eligendi sunt.',
      image: PreviewIgniteCoffee,
      urlSite: 'https://02-desafio-ignite-reactjs.vercel.app/',
      urlGitHub: 'https://github.com/brunopp00/Coffe-Delivery',
      icons: [
        <BiLogoReact key={1} size={20} />,
        <BiLogoJavascript key={2} size={20} />,
        <BiLogoHtml5 key={3} size={20} />,
        <BiLogoCss3 key={4} size={20} />,
        <BiLogoFigma key={5} size={20} />,
      ],
    },
    {
      id: 4,
      name: 'Pokedéx',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur ipsam recusandae iste. Autem cumque repudiandae molestias animi maxime, optio nulla possimus obcaecati iste, ab asperiores, vero quibusdam eligendi sunt.',
      image: PreviewPokedex,
      urlSite: 'https://brunopp00.github.io/pokedex/',
      urlGitHub: 'https://github.com/brunopp00/pokedex',
      icons: [
        <BiLogoReact key={1} size={20} />,
        <BiLogoHtml5 key={2} size={20} />,
        <BiLogoCss3 key={3} size={20} />,
      ],
    },
    {
      id: 5,
      name: 'Previsão Tempo',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur ipsam recusandae iste. Autem cumque repudiandae molestias animi maxime, optio nulla possimus obcaecati iste, ab asperiores, vero quibusdam eligendi sunt.',
      image: PreviewPrevisao,
      urlSite: 'https://brunopp00.github.io/previsaodotempo/',
      urlGitHub: 'https://github.com/brunopp00/previsaodotempo',
      icons: [
        <BiLogoReact key={1} size={20} />,
        <BiLogoHtml5 key={2} size={20} />,
        <BiLogoCss3 key={3} size={20} />,
      ],
    },
    {
      id: 7,
      name: 'Ignite DtMoney',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur ipsam recusandae iste. Autem cumque repudiandae molestias animi maxime, optio nulla possimus obcaecati iste, ab asperiores, vero quibusdam eligendi sunt.',
      image: PreviewDtMoney,
      urlSite: 'https://03-modulo-ignite-reactjs.vercel.app/',
      urlGitHub: 'https://github.com/brunopp00/DT-Money',
      icons: [
        <BiLogoReact key={1} size={20} />,
        <BiLogoNodejs key={2} size={20} />,
        <BiLogoTypescript key={3} size={20} />,
        <BiLogoHtml5 key={4} size={20} />,
        <BiLogoCss3 key={5} size={20} />,
        <TbBrandNextjs key={6} size={20} />,
        <BiLogoFigma key={7} size={20} />,
      ],
    },
    {
      id: 9,
      name: 'Ignite Timer',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur ipsam recusandae iste. Autem cumque repudiandae molestias animi maxime, optio nulla possimus obcaecati iste, ab asperiores, vero quibusdam eligendi sunt.',
      image: PreviewIgniteTimer,
      urlSite: 'https://02-ignite-timer-seven.vercel.app/',
      urlGitHub: 'https://github.com/brunopp00/Ignite-Timer',
      icons: [
        <BiLogoReact key={1} size={20} />,
        <BiLogoTypescript key={2} size={20} />,
        <BiLogoHtml5 key={3} size={20} />,
        <BiLogoCss3 key={4} size={20} />,
        <BiLogoFigma key={5} size={20} />,
      ],
    },
    {
      id: 10,
      name: 'Ignite ToDoList',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur ipsam recusandae iste. Autem cumque repudiandae molestias animi maxime, optio nulla possimus obcaecati iste, ab asperiores, vero quibusdam eligendi sunt.',
      image: PreviewIgniteTodo,
      urlSite: 'https://desafio-modulo1-ignite-reactjs.vercel.app/',
      urlGitHub: 'https://github.com/brunopp00/Todo-list',
      icons: [
        <BiLogoReact key={1} size={20} />,
        <BiLogoJavascript key={2} size={20} />,
        <BiLogoHtml5 key={3} size={20} />,
        <BiLogoCss3 key={4} size={20} />,
        <BiLogoFigma key={5} size={20} />,
      ],
    },
    {
      id: 12,
      name: 'Projeto Android',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur ipsam recusandae iste. Autem cumque repudiandae molestias animi maxime, optio nulla possimus obcaecati iste, ab asperiores, vero quibusdam eligendi sunt.',
      image: PreviewAndroid,
      urlSite: 'https://brunopp00.github.io/projeto-android/',
      urlGitHub: 'https://github.com/brunopp00/projeto-android',
      icons: [
        <BiLogoHtml5 key={1} size={20} />,
        <BiLogoCss3 key={2} size={20} />,
      ],
    },
    {
      id: 13,
      name: 'Ignite Feed',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur ipsam recusandae iste. Autem cumque repudiandae molestias animi maxime, optio nulla possimus obcaecati iste, ab asperiores, vero quibusdam eligendi sunt.',
      image: PreviewIgniteFeed,
      urlSite: 'https://ignite-modulo-01.vercel.app/',
      urlGitHub: 'https://github.com/brunopp00/Ignite-Feed',
      icons: [
        <BiLogoReact key={1} size={20} />,
        <BiLogoJavascript key={2} size={20} />,
        <BiLogoHtml5 key={3} size={20} />,
        <BiLogoCss3 key={4} size={20} />,
        <BiLogoFigma key={5} size={20} />,
      ],
    },
    {
      id: 15,
      name: 'Design System',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur ipsam recusandae iste. Autem cumque repudiandae molestias animi maxime, optio nulla possimus obcaecati iste, ab asperiores, vero quibusdam eligendi sunt.',
      image: PreviewDesign,
      urlSite: 'https://brunopp00.github.io/design-system/',
      urlGitHub: 'https://github.com/brunopp00/design-system',
      icons: [
        <BiLogoReact key={1} size={20} />,
        <SiStorybook key={2} size={20} />,
        <BiLogoFigma key={3} size={20} />,
      ],
    },
    {
      id: 16,
      name: 'Ignite Call',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur ipsam recusandae iste. Autem cumque repudiandae molestias animi maxime, optio nulla possimus obcaecati iste, ab asperiores, vero quibusdam eligendi sunt.',
      image: PreviewIgniteCall,
      urlSite: 'https://ignite-call-livid-alpha.vercel.app/',
      urlGitHub: 'https://github.com/brunopp00/ignite-call',
      icons: [
        <BiLogoReact key={1} size={20} />,
        <BiLogoTypescript key={2} size={20} />,
        <BiLogoHtml5 key={3} size={20} />,
        <BiLogoCss3 key={4} size={20} />,
        <TbBrandNextjs key={5} size={20} />,
        <BiLogoFigma key={6} size={20} />,
      ],
    },
    {
      id: 17,
      name: 'Esgotamento',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur ipsam recusandae iste. Autem cumque repudiandae molestias animi maxime, optio nulla possimus obcaecati iste, ab asperiores, vero quibusdam eligendi sunt.',
      image: PreviewEsgotamento,
      urlSite: 'https://esgotamento-sanitario.vercel.app/',
      urlGitHub: 'https://github.com/brunopp00/esgotamento-sanitario',
      icons: [
        <BiLogoReact key={1} size={20} />,
        <BiLogoJavascript key={2} size={20} />,
        <BiLogoHtml5 key={3} size={20} />,
        <BiLogoCss3 key={4} size={20} />,
      ],
    },
  ]

  const listaContatos = [
    {
      title: 'E-mail',
      description: 'brunofnh08@gmail.com',
      icon: <HiOutlineMail size={25} />,
      link: '',
    },
    {
      title: 'Telefone',
      description: '(51) 99918-7010',
      icon: <BsTelephone size={25} />,
      link: 'https://wa.me/55999187010',
    },
    {
      title: 'Linkedin',
      description: '@bruno-frohlich',
      icon: <BiLogoLinkedin size={25} />,
      link: 'https://www.linkedin.com/in/bruno-frohlich-444b06234/',
    },
    {
      title: 'GitHub',
      description: '@brunopp00',
      icon: <BiLogoGithub size={25} />,
      link: 'https://github.com/brunopp00',
    },
  ]

  function handleClickMenu(menu) {
    const element = document.getElementById(menu)
    element.scrollIntoView()
  }
  return (
    <div>
      <Header handleClickMenu={handleClickMenu} />
      <Home id="menu" />
      <About />
      <Abilities />
      <Projects id="projetos" listaProjetos={listaProjetos} />
      <Contatos contatos={listaContatos} />
    </div>
  )
}
