import Reveal from './Reveal'

interface ContatosProps {
  contatos: {
    title: string
    description: string
    icon: JSX.Element
    link: string
  }[]
}

export function Contatos({ contatos }: ContatosProps) {
  return (
    <Reveal id="contatos" className="flex flex-col gap-5 mb-20">
      <div className="w-full text-center mb-10">
        <h1 className="font-tilt-warp text-white text-3xl">Contatos</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:gap-0 lg:grid-cols-4 pl-32 pr-32">
        {contatos.map((contato) => {
          return (
            <div
              key={contato.title}
              className="flex flex-col items-center gap-5"
            >
              <div
                onClick={() => {
                  window.open(contato.link, '_blank')
                }}
                className="bg-zinc-800 rounded-full p-4 text-default w-14 cursor-pointer"
              >
                {contato.icon}
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-white text-center">{contato.title}</p>
                <p className="text-zinc-500">{contato.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </Reveal>
  )
}
