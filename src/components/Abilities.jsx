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
import React from 'react'

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
    <div id="abilities" className="h-full w-full mt-20">
      <div className="w-full">
        <h1 className="text-zinc-700 dark:text-white text-center font-tilt-warp">
          Habilidades
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-5 lg:grid-cols-8 pl-16 pr-16">
        {abilitiesList.map((item) => {
          return (
            <div
              key={item.name}
              className="w-[100%] gap-3 h-full p-5 bg-slate-300 dark:bg-zinc-800 flex flex-col items-center rounded-tl-3xl border-b-4 border-default transform transition-transform  hover:scale-110"
            >
              <div>
                <p className="text-default text-justify">{item.name}</p>
              </div>
              <div className="text-default">{item.icon}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
