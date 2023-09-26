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
import React from 'react'

export const Abilities = () => {
  const abilitiesList = [
    { name: 'HTML5', icon: <BiLogoHtml5 size={45} /> },
    { name: 'CSS3', icon: <BiLogoCss3 size={45} /> },
    { name: 'JavaScript', icon: <BiLogoJavascript size={45} /> },
    { name: 'TypeScript', icon: <BiLogoTypescript size={45} /> },
    { name: 'NodeJs', icon: <BiLogoNodejs size={45} /> },
    { name: 'ReactJs', icon: <BiLogoReact size={45} /> },
    { name: 'Tailwind CSS', icon: <BiLogoTailwindCss size={45} /> },
    { name: 'Redux', icon: <BiLogoRedux size={45} /> },
    { name: 'Figma', icon: <BiLogoFigma size={45} /> },
    { name: 'Android Java', icon: <BiLogoAndroid size={45} /> },
  ]
  return (
    <div id="abilities" className="h-full w-full">
      <div className="w-full">
        <h1 className="text-default text-center font-tilt-warp">Habilidades</h1>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 p-5">
        {abilitiesList.map((item) => {
          return (
            <div
              key={item.name}
              className="w-[85%] h-full p-5 bg-zinc-800 flex flex-col items-center rounded-tl-3xl border-b-4 border-default transform transition-transform  hover:scale-110"
            >
              <div>
                <p className="text-default text-lg">{item.name}</p>
              </div>
              <div className="text-default">{item.icon}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
