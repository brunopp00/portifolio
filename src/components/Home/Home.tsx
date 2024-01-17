import { useEffect, useState } from 'react'
import './styles.css'

export function Home() {
  const words = ['Front-end', 'Back-end'] // Add more words if desired
  const [index, setIndex] = useState(0)
  const [currentWord, setCurrentWord] = useState(words[0])

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 3000)

    return () => {
      clearInterval(interval)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const wordElement = document.getElementById('animation-word')!
    wordElement.classList.remove('active')

    setTimeout(() => {
      setCurrentWord(words[index])
      wordElement.classList.add('active')
    }, 500)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  return (
    <div className="h-screen w-full flex items-center justify-center" id="menu">
      <div className="text-center w-full text-2xl">
        <h1 className="font-tilt-warp text-white">
          Olá, Me chamo Bruno Fröhlich
        </h1>
        <h1 className="font-tilt-warp text-default">
          Desenvolvedor
          <div className="animation-text">
            <span id="animation-word" className="animation-word">
              {currentWord}
            </span>
          </div>
        </h1>
      </div>
    </div>
  )
}
