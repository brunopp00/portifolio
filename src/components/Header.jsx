import { MenuOutlined } from '@mui/icons-material'
import { Drawer } from '@mui/material'
import React, { useState } from 'react'

const buttonsList = [
  { text: 'PROJETOS', click: 'projetos' },
  { text: 'SOBRE MIM', click: 'sobre' },
  { text: 'HABILIDADES', click: 'abilities' },
  { text: 'CONTATOS', click: 'contatos' },
]

export function Header({ handleClickMenu }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="h-3">
      <div className="bg-zinc-800 h-1/2 flex justify-between items-center p-7">
        <h1
          className="p-0 cursor-pointer font-tilt-warp text-default"
          onClick={() => handleClickMenu('menu')}
        >
          Bruno Frohlich
        </h1>
        <MenuOutlined
          className="text-default cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
      </div>
      <Drawer anchor={'right'} open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="p-5 h-screen flex flex-col bg-zinc-800">
          {buttonsList.map((item) => (
            <>
              <button
                className="w-48 text-default p-3 transition-opacity rounded-lg hover:opacity-10"
                key={item.text}
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
