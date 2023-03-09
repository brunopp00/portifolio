import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

export function Projects({ listaProjetos }) {
  console.log(listaProjetos)
  return (
    <Grid
      container
      spacing={2}
      id="projetos"
      style={{
        padding: '1rem',
        height: '100vh',
        displa: 'flex',
        justifyContent: 'center',
      }}
    >
      <Grid
        item
        xs={12}
        style={{
          textAlign: 'center',
        }}
      >
        <Typography variant="h3" color={'white'}>
          Projetos
        </Typography>
        <Typography variant="h5" color={'#ababab'}>
          Programas que desenvolvi ao longo do tempo
        </Typography>
      </Grid>
      {listaProjetos.map((projeto) => (
        <Box
          display={'flex'}
          flexDirection={'column'}
          margin={'10px'}
          style={{ backgroundColor: '#282828' }}
          width={'30%'}
          key={projeto[0]}
        >
          <Box display={'flex'} width>
            <img height={'100px'} src={projeto[3]} alt="" />
          </Box>
          <Box>
            <h1>{projeto[1]}</h1>
            <p>{projeto[2]}</p>
          </Box>
        </Box>
      ))}
    </Grid>
  )
}
