import React from 'react'
import fotoBruno from '../assets/foto-bruno2.jpeg'
export function About() {
  return (
    <div className="w-full h-full" id="sobre">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-4/5 bg-slate-300 dark:bg-zinc-800 m-10 rounded-xl">
        <div className="flex justify-center items-center mt-5 lg:mt-0">
          <img
            className="rounded-lg w-[45%] h-[90%] lg:w-[80%] lg:h-[80%] object-fill "
            src={fotoBruno}
            alt=""
          />
        </div>
        <div className="flex w-full h-full flex-col justify-center p-10">
          <h1 className=" text-zinc-700 dark:text-white font-tilt-warp text-center  lg:text-start">
            Sobre Mim
          </h1>
          <p className="font-tilt-warp text-center text-zinc-600 dark:text-white text-xs lg:text-sm lg:text-start">
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
