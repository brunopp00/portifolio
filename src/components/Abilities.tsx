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
    <Reveal id="abilities">
      <Carousel
        orientation="vertical"
        className="w-full"
        opts={{
          align: 'start',
        }}
      >
        <CarouselContent className="max-h-40">
          {abilitiesList.map((item) => {
            return (
              <CarouselItem key={item.name}>
                <div className="w-[100%] gap-5 h-full p-5 flex flex-col justify-between items-center border-b-4 border-muted">
                  <div>
                    <p>{item.name}</p>
                  </div>
                  <div>{item.icon}</div>
                </div>
              </CarouselItem>
            )
          })}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </Reveal>
  )
}
