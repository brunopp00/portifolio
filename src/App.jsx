import { Header } from './components/Header/Header'
import './app.css'
import { Home } from './components/Home/Home'
export function App() {
  function handleClickMenu(menu) {
    const element = document.getElementById(menu)
    element.scrollIntoView()
  }
  return (
    <div className="App">
      <Header handleClickMenu={handleClickMenu} />
      <Home id="menu" />
    </div>
  )
}
