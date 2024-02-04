import { ItemProject } from './ItemProject'
import Reveal from './Reveal'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

interface ProjectsProps {
  listaProjetos: {
    id: number
    name: string
    image: string
    icons: JSX.Element[]
    urlGitHub: string
    urlSite?: string
  }[]
}

export function Projects({ listaProjetos }: ProjectsProps) {
  return (
    <Reveal id="projetos" className="flex flex-col justify-center w-full">
      <div className="w-full text-center flex flex-col gap-2 mb-10">
        <h1 className="font-tilt-warp text-3xl">Projetos</h1>
        <h1 className="font-tilt-warp text-xl">
          Programas que desenvolvi ao longo do tempo
        </h1>
      </div>
      <Carousel
        opts={{
          align: 'start',
        }}
      >
        <CarouselContent>
          {listaProjetos.map((projeto) => (
            <CarouselItem
              className="lg:basis-1/3 md:basis-1/2"
              key={projeto.id}
            >
              <ItemProject projeto={projeto} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Reveal>
  )
}
