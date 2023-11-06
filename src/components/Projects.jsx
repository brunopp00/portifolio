import React from 'react'
import { ItemProject } from './ItemProject'
import { Reveal } from './Reveal'

export function Projects({ listaProjetos }) {
  return (
    <Reveal className="h-full justify-center flex flex-col gap-5" id="projetos">
      <div className="w-full text-center ">
        <h1 className="font-tilt-warp text-3xl text-white">Projetos</h1>
        <h1 className="font-tilt-warp text-2xl text-white">
          Programas que desenvolvi ao longo do tempo
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 pl-16 pr-16">
        {listaProjetos.map((projeto) => (
          <ItemProject projeto={projeto} key={projeto.id} />
        ))}
      </div>
    </Reveal>
  )
}
