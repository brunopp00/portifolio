import { Grid, Typography } from '@mui/material'
import React from 'react'

export function About({ about }) {
  return (
    <Grid
      container
      spacing={2}
      id="sobre"
      style={{
        padding: '1rem',
        height: '100%',
        displa: 'flex',
        justifyContent: 'center',
      }}
    >
      <Grid
        item
        xs={12}
        style={{
          marginBottom: '10px',
          textAlign: 'center',
        }}
      >
        <Typography
          style={{ fontFamily: 'Tilt Warp, cursive' }}
          variant="h3"
          color={'white'}
        >
          Sobre Mim
        </Typography>
        <Typography
          style={{ fontFamily: 'Tilt Warp, cursive' }}
          variant="h5"
          color={'white'}
        >
          Olá, meu nome é Bruno Fröhlich, atualmente trabalho como estagiário em
          desenvolvimento de software na Unimed Vale do Caí. Mesmo sendo muito
          jovem já tive várias conquistas pessoais das quais me orgulho muito.
          {about.map((item) => (
            <li
              key={item[0]}
              style={{
                fontFamily: 'Tilt Warp, cursive',
                color: '#636363',
                marginTop: '50px',
              }}
            >
              {item[1]}
            </li>
          ))}
        </Typography>
      </Grid>
    </Grid>
  )
}
