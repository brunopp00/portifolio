import { MenuOutlined } from '@mui/icons-material'
import { Drawer } from '@mui/material'
import React, { useState } from 'react'

const buttonsList = [
  { id: 0, text: 'PROJETOS', click: 'projetos' },
  { id: 1, text: 'SOBRE MIM', click: 'sobre' },
  { id: 2, text: 'HABILIDADES', click: 'abilities' },
  { id: 3, text: 'CONTATOS', click: 'contatos' },
]

export function Header({ handleClickMenu }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="h-3 w-full z-10 fixed">
      <div className="bg-default dark:bg-zinc-800 border-b-2 border-default dark:border-0 h-1/2 flex justify-between items-center p-7">
        <h1
          className="p-0 cursor-pointer font-tilt-warp dark:text-default text-white"
          onClick={() => handleClickMenu('menu')}
        >
          Bruno Frohlich
        </h1>
        <div className="flex items-center gap-4">
          {/* <SwitchRoot onCheckedChange={changeTheme}>
            <SwitchThumb>
              {theme === 'light' ? <BsFillSunFill /> : <BsFillMoonFill />}
            </SwitchThumb>
          </SwitchRoot> */}
          <MenuOutlined
            className="text-white dark:text-default cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <Drawer anchor={'right'} open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="p-5 h-screen flex flex-col bg-white dark:bg-zinc-800">
          {buttonsList.map((item) => (
            <>
              <button
                className="w-48 text-default p-3 transition-opacity hover:opacity-10 border-b-[1px] border-default"
                key={item.id}
                onClick={() => {
                  setIsOpen(false)
                  handleClickMenu(item.click)
                }}
              >
                {item.text}
              </button>
            </>
          ))}
        </div>
      </Drawer>
    </header>
  )
}

// export const SwitchRoot = styled(Switch.Root)`
//   cursor: pointer;
//   width: 50px;
//   height: 27px;
//   border-radius: 9999px;
//   position: relative;
//   border: 2px solid skyblue;
//   -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
// `

// export const SwitchThumb = styled(Switch.Thumb)`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 21px;
//   height: 21px;
//   border: 0;
//   background-color: transparent;
//   color: lightgray;
//   border-radius: 9999px;
//   transition: transform 100ms;
//   transform: translateX(2px);
//   will-change: transform;

//   &[data-state='checked'] {
//     background-color: gray;
//     transform: translateX(23px);
//     color: yellow;
//   }
// `
