import React from 'react'

export function Projects({ listaProjetos }) {
  return (
    <div className="h-full justify-center p-4" id="projetos">
      <div className="w-full mb-2 text-center">
        <h1 className="font-tilt-warp text-white">Projetos</h1>
        <h1 className="font-tilt-warp text-zinc-400">
          Programas que desenvolvi ao longo do tempo
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 p-20">
        {listaProjetos.map((projeto) => (
          <div
            className="flex flex-col h-full lg:w-full bg-zinc-800 rounded-lg"
            key={projeto[0]}
          >
            <div className="flex w-full h-2/5">
              <img
                className="w-full h-full rounded-t-lg object-fill"
                src={projeto[3]}
                alt=""
              />
            </div>
            <div className="w-full h-full p-5">
              <h1 className="font-tilt-warp text-zinc-200">{projeto[1]}</h1>
              <h2 className="mt-2 font-roboto text-zinc-200 font-thin">
                {projeto[2]}
              </h2>
            </div>
            <div className="flex justify-between items-end p-2">
              <p>
                {projeto[4] !== '' && (
                  <a
                    target={'_blank'}
                    className="text-zinc-300 font-tilt-warp"
                    href={projeto[4]}
                    rel="noreferrer"
                  >
                    Visualizar
                  </a>
                )}
              </p>
              <p>
                <a
                  target={'_blank'}
                  className="text-zinc-300 font-tilt-warp"
                  href={projeto[5]}
                  rel="noreferrer"
                >
                  Ver código
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
