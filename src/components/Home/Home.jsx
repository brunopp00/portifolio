import { Grid, Typography } from '@mui/material'
import React from 'react'
import fotoBruno from '../../assets/Foto-Bruno.png'

export function Home() {
  return (
    <Grid
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
      <Grid item xs={12} md={4} lg={6} style={{ textAlign: 'center' }}>
        <Typography
          variant="h4"
          style={{ fontFamily: 'Tilt Warp, cursive', color: 'white' }}
        >
          Olá,
          <br /> Me chamo {''}
          <span style={{ color: '#2797b2' }}>Bruno Fröhlich</span>
          <br />
          Sou desenvolvedor
          {/* Olá, meu nome é Bruno Fröhlich, atualmente trabalho como estagiário em
          desenvolvimento de software na Unimed Vale do Caí. Durante meu estágio
          na Unimed, contribui na criação de diversos programas que são usados
          por toda a cooperativa. Possuo habilidades avançadas nas linguagens
        JavaScript e TypeScript. */}
        </Typography>
      </Grid>
      <Grid item xs={12} md={4} lg={4} style={{ textAlign: 'center' }}>
        <img
          src={fotoBruno}
          alt=""
          style={{
            height: '80%',
            width: '80%',
            borderRadius: '100%',
            border: '5px solid #3b3a3a',
          }}
        />
      </Grid>
    </Grid>
  )
}
