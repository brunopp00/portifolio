import { Grid, Typography } from '@mui/material'
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
    <Grid
      id="menu"
      container
      spacing={2}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '40px',
        height: '100vh',
      }}
    >
      <Grid item xs={12} md={4} lg={6} style={{ textAlign: 'start' }}>
        <Typography
          variant="h4"
          style={{ fontFamily: 'Tilt Warp, cursive', color: 'white' }}
        >
          Olá, Me chamo Bruno Fröhlich
        </Typography>
        <Typography
          variant="h4"
          style={{ fontFamily: 'Tilt Warp, cursive', color: '#2797b2' }}
        >
          Desenvolvedor
          <div className="animation-text">
            <span id="animation-word" className="animation-word">
              {currentWord}
            </span>
          </div>
        </Typography>
      </Grid>
      <Grid item xs={12} md={4} lg={4} style={{ textAlign: 'center' }}>
        <img
          src={fotoBruno}
          alt=""
          style={{
            height: '80%',
            background: 'transparent',
            width: '80%',
            borderRadius: '100%',
            border: '5px solid transparent',
          }}
        />
      </Grid>
    </Grid>
  )
}
