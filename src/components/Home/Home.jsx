import React, { useEffect, useState } from 'react'
import fotoBruno from '../../assets/Foto-Bruno-trasparente.png'
import './styles.css'

export function Home() {
  const words = ['Front-end', 'Back-end'] // Adicione mais palavras se desejar
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
    const wordElement = document.getElementById('animation-word')
    wordElement.classList.remove('active')

    setTimeout(() => {
      setCurrentWord(words[index])
      wordElement.classList.add('active')
    }, 500)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center h-screen w-full p-10 "
      id="menu"
    >
      <div className="text-center lg:text-end w-full">
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
      <div className="w-full flex justify-center">
        <img
          className="h-1/2 w-1/2 bg-transparent rounded-full border-solid border-transparent border-spacing-1"
          src={fotoBruno}
          alt=""
        />
      </div>
    </div>
  )
}
