import React from 'react'
import fotoBruno from '../../assets/foto-bruno2.jpeg'
export function About() {
  return (
    <div className="w-full h-screen" id="sobre">
      <div className="text-center">
        <h1 className="text-white font-tilt-warp">Sobre Mim</h1>
      </div>
      <div className="grid grid-cols-2 h-4/5 bg-zinc-800 m-10 rounded-xl">
        <div className="w-full h-full flex justify-center items-center">
          <img className="rounded-full" src={fotoBruno} alt="" />
        </div>
        <div className="flex w-full h-full items-center p-10">
          <p className="font-tilt-warp text-zinc-50 text-sm">
            Meu nome é Bruno Fröhlich, nasci em 4 de fevereiro de 2006. Desde
            muito cedo, desenvolver e programar se tornaram minhas paixões. Sou
            um programador com conhecimento em várias linguagens e tecnologias,
            incluindo JavaScript, TypeScript, Android Java, React.js e Node.js.
            Atualmente, sou estagiário na Unimed Vale do Caí, onde utilizo
            React.js para desenvolver interfaces web. Destaco um dos meus
            projetos mais significativos, o desenvolvimento de um aplicativo
            Android que se tornou fundamental para todos os funcionários da
            Unimed Vale do Caí, otimizando as operações da empresa. Demonstro
            meu comprometimento com a aprendizagem através da conclusão do curso
            de React.js da RocketSeat. Além disso, estou expandindo meu
            conhecimento em Node.js e React Native, também pela RocketSeat.
            Tenho experiência em desenvolvimento fullstack e você pode conferir
            alguns dos meus projetos na seção de projetos. Trabalho como
            freelancer, principalmente na área de front-end, contribuindo para
            diversos projetos. Minha habilidade com o Tailwind CSS me permite
            criar interfaces de usuário elegantes e responsivas. Com um futuro
            promissor pela frente e uma paixão contínua pelo desenvolvimento de
            software, estou ansioso para continuar minha jornada na programação
            e contribuir para projetos inovadores e desafiadores.
          </p>
        </div>
      </div>
    </div>
  )
}
