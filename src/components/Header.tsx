import { Drawer } from '@mui/material'
import { useState } from 'react'
import { HiMenu } from 'react-icons/hi'

interface HeaderProps {
  handleClickMenu: (click: string) => void
}

const buttonsList = [
  { id: 0, text: 'PROJETOS', click: 'projetos' },
  { id: 1, text: 'SOBRE MIM', click: 'sobre' },
  { id: 2, text: 'HABILIDADES', click: 'abilities' },
  { id: 3, text: 'CONTATOS', click: 'contatos' },
]

export function Header({ handleClickMenu }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="h-3 w-full z-10 fixed">
      <div className="bg-zinc-800 border-0 h-1/2 flex justify-between items-center p-7 pr-[64px] pl-[64px]">
        <h1
          className="p-0 cursor-pointer font-tilt-warp text-default"
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
          <HiMenu
            size={30}
            className="text-default cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <Drawer anchor={'right'} open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="p-5 h-screen flex flex-col bg-zinc-800">
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
