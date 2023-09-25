import React from 'react'

export function Projects({ listaProjetos }) {
  return (
    <div className="h-full justify-center mt-20" id="projetos">
      <div className="w-full text-center">
        <h1 className="font-tilt-warp text-violet-600">Projetos</h1>
        <h1 className="font-tilt-warp text-violet-700">
          Programas que desenvolvi ao longo do tempo
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 pl-16 pr-16">
        {listaProjetos.map((projeto) => (
          <div
            className="flex flex-col h-full lg:w-full bg-zinc-800 rounded-lg transform transition-transform  hover:scale-105"
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
              <h1 className="font-tilt-warp text-violet-600">{projeto[1]}</h1>
              <h2 className="mt-2 font-roboto text-violet-700 font-thin">
                {projeto[2]}
              </h2>
            </div>
            <div className="flex justify-between items-end p-2">
              <p>
                {projeto[4] !== '' && (
                  <a
                    target={'_blank'}
                    className="text-violet-600 font-tilt-warp"
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
                  className="text-violet-600 font-tilt-warp"
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
