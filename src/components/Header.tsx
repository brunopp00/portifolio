import { ThemeToggle } from './theme-toggle'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from './ui/menubar'

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
  return (
    <header className="h-3 w-full z-10 fixed">
      <div className="bg-card border-b-2 border-border h-1/2 flex justify-between items-center p-7 px-10 lg:px-20">
        <h1
          className="p-0 cursor-pointer font-tilt-warp"
          onClick={() => handleClickMenu('menu')}
        >
          Bruno Frohlich
        </h1>
        <div className="flex items-center gap-4">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>Menu</MenubarTrigger>
              <MenubarContent>
                {buttonsList.map((item) => (
                  <MenubarItem
                    key={item.id}
                    onClick={() => {
                      handleClickMenu(item.click)
                    }}
                  >
                    {item.text}
                  </MenubarItem>
                ))}
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
