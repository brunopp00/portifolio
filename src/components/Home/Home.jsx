import { Grid, Typography } from '@mui/material'
import React from 'react'
import fotoBruno from '../../assets/Foto-Bruno-trasparente.png'

export function Home() {
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
          Desenvolvedor Front-End
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
