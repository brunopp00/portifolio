import React from 'react'
import fotoBruno from '../assets/foto-bruno2.jpeg'
export function About() {
  return (
    <div className="w-full h-full" id="sobre">
      <div className="grid grid-cols-1 lg:grid-cols-2 m-10">
        <div className="flex justify-center items-center">
          <img className="rounded-full  object-fill " src={fotoBruno} alt="" />
        </div>
        <div className="flex w-full h-full flex-col justify-center p-10 gap-4">
          <h1 className=" text-white font-tilt-warp text-3xl text-start">
            Sobre Mim
          </h1>
          <ul className="flex flex-col gap-2">
            <li>
              <p className="font-tilt-warp text-white text-xs lg:text-xl text-start">
                👨‍💻 Trabalho como desenvolvedor front end desde de 2021
              </p>
            </li>
            <li>
              <p className="font-tilt-warp text-white text-xs lg:text-xl text-start">
                🎓 Cursando Análise e Desenvolvimento de Sistemas
              </p>
            </li>
            <li>
              <p className="font-tilt-warp text-white text-xs lg:text-xl text-start">
                💡 Interesse em desenvolvimento front end e back end
              </p>
            </li>
            <li>
              <p className="font-tilt-warp text-white text-xs lg:text-xl text-start">
                🚀 Buscando novas oportunidades e desafios
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
