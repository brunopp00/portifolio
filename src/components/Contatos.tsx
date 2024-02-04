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
    <Reveal id="contatos" className="mb-20 w-full">
      <div className="w-full text-center mb-10">
        <h1 className="font-tilt-warp text-3xl">Contatos</h1>
      </div>
      <div className="flex flex-col justify-center gap-4 lg:justify-around lg:gap-0 lg:flex-row">
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
                className="cursor-pointer"
              >
                {contato.icon}
              </div>
              <div className="flex flex-col gap-3">
                <p className=" text-center">{contato.title}</p>
                <p className="">{contato.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </Reveal>
  )
}
