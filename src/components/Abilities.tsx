import {
  BiLogoAndroid,
  BiLogoCss3,
  BiLogoFigma,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoRedux,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from 'react-icons/bi'
import { SiStorybook } from 'react-icons/si'
import Reveal from './Reveal'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export const Abilities = () => {
  const abilitiesList = [
    { name: 'HTML5', icon: <BiLogoHtml5 size={35} /> },
    { name: 'CSS3', icon: <BiLogoCss3 size={35} /> },
    { name: 'JavaScript', icon: <BiLogoJavascript size={35} /> },
    { name: 'TypeScript', icon: <BiLogoTypescript size={35} /> },
    { name: 'NodeJs', icon: <BiLogoNodejs size={35} /> },
    { name: 'ReactJs', icon: <BiLogoReact size={35} /> },
    { name: 'Tailwind CSS', icon: <BiLogoTailwindCss size={35} /> },
    { name: 'Redux', icon: <BiLogoRedux size={35} /> },
    { name: 'Figma', icon: <BiLogoFigma size={35} /> },
    { name: 'Android Java', icon: <BiLogoAndroid size={35} /> },
    { name: 'Storybook', icon: <SiStorybook size={35} /> },
    { name: 'Figma', icon: <BiLogoFigma size={35} /> },
  ]
  return (
    <Reveal id="abilities" className="flex flex-col gap-10">
      <h1 className="text-white text-3xl text-center font-tilt-warp mb-10">
        Habilidades
      </h1>
      <Carousel
        className="w-full"
        opts={{
          align: 'start',
        }}
      >
        <CarouselContent>
          {abilitiesList.map((item) => {
            return (
              <CarouselItem
                key={item.name}
                className="lg:basis-1/6 md:basis-1/2"
              >
                <div className="w-[100%] gap-3 h-full p-5 bg-zinc-800 flex flex-col items-center rounded-tl-3xl border-b-4 border-default">
                  <div>
                    <p className="text-default sm:text-sm">{item.name}</p>
                  </div>
                  <div className="text-default">{item.icon}</div>
                </div>
              </CarouselItem>
            )
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Reveal>
  )
}
