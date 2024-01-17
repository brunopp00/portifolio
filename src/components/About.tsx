import fotoBruno from '../assets/foto-bruno2.jpeg'
import Reveal from './Reveal'
export function About() {
  return (
    <Reveal className="w-full h-full" id="sobre">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex justify-center items-center">
          <img
            className="rounded-full  object-cover w-40 h-40 lg:w-80 lg:h-80"
            src={fotoBruno}
            alt=""
          />
        </div>
        <div className="flex w-full h-full flex-col justify-center gap-4 text-center lg:text-start">
          <h1 className=" text-white font-tilt-warp text-3xl">Sobre Mim</h1>
          <ul className="flex flex-col gap-2">
            <li>
              <p className="font-tilt-warp text-white text-xs lg:text-xl ">
                👨‍💻 Trabalho como desenvolvedor front end desde de 2021
              </p>
            </li>
            <li>
              <p className="font-tilt-warp text-white text-xs lg:text-xl">
                🎓 Ano que vem começarei no curso de Análise e Desenvolvimento
                de Sistemas
              </p>
            </li>
            <li>
              <p className="font-tilt-warp text-white text-xs lg:text-xl">
                💡 Interesse em desenvolvimento front end e back end
              </p>
            </li>
            <li>
              <p className="font-tilt-warp text-white text-xs lg:text-xl">
                🚀 Buscando novas oportunidades e desafios
              </p>
            </li>
          </ul>
        </div>
      </div>
    </Reveal>
  )
}
