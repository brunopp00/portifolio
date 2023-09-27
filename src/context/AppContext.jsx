import { useState, createContext } from 'react'

export const Context = createContext({})

export function ContextProvider({ children }) {
  const [theme, setTheme] = useState('dark')

  function changeTheme() {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <Context.Provider value={{ theme, changeTheme }}>
      {children}
    </Context.Provider>
  )
}
