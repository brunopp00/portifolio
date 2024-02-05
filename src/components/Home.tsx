import { About } from './About'
import Reveal from './Reveal'

export function Home() {
  return (
    <Reveal id="menu" className="w-full pt-28">
      <div className="flex items-center flex-col lg:flex-row gap-10 lg:gap-0 justify-between">
        <div className="text-4xl tracking-tight font-tilt-warp">
          <h1>Olá, Me chamo Bruno Fröhlich</h1>
          <h1>Desenvolvedor Front-end</h1>
        </div>
        <div>
          <About />
        </div>
      </div>
    </Reveal>
  )
}
