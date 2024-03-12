import { ItemProject } from './ItemProject'
import Reveal from './Reveal'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

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
    <Reveal id="projetos" className="w-full">
      <Card>
        <CardHeader className="w-full text-center">
          <CardTitle>Projetos</CardTitle>
        </CardHeader>
        <CardContent className="p-16">
          <Carousel
            opts={{
              align: 'start',
            }}
          >
            <CarouselContent>
              {listaProjetos.map((projeto) => (
                <CarouselItem
                  className="lg:basis-1/3 md:basis-1"
                  key={projeto.id}
                >
                  <ItemProject projeto={projeto} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </CardContent>
      </Card>
    </Reveal>
  )
}
