import { ThemeToggle } from './theme-toggle'
interface HeaderProps {
  handleClickMenu: (click: string) => void
}

export function Header({ handleClickMenu }: HeaderProps) {
  return (
    <div className="bg-card border-b-2 border-border h-10 flex justify-between items-center p-7 px-10 lg:px-20">
      <h1
        className="p-0 cursor-pointer font-tilt-warp"
        onClick={() => handleClickMenu('menu')}
      >
        Bruno Frohlich
      </h1>
      <div className="flex items-center gap-4">
        <ThemeToggle />
      </div>
    </div>
  )
}
