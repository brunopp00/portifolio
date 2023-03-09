import { Box, Grid, Typography, useMediaQuery } from '@mui/material'
import React from 'react'

export function Projects({ listaProjetos }) {
  const milPx = useMediaQuery('(min-width:1300px)')
  const quinhentosPx = useMediaQuery('(min-width:500px)')

  return (
    <Grid
      container
      spacing={2}
      id="projetos"
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
          Projetos
        </Typography>
        <Typography
          style={{ fontFamily: 'Tilt Warp, cursive' }}
          variant="h5"
          color={'#ababab'}
        >
          Programas que desenvolvi ao longo do tempo
        </Typography>
      </Grid>
      {listaProjetos.map((projeto) => (
        <Box
          borderRadius={'10px'}
          display={'flex'}
          flexDirection={'column'}
          margin={'10px'}
          style={{ backgroundColor: '#282828' }}
          width={milPx ? '25%' : quinhentosPx ? '45%' : '100%'}
          height={milPx ? '90%' : '100%'}
          key={projeto[0]}
        >
          <Box display={'flex'} width={'100%'} height={'45%'}>
            <img
              height={'100%'}
              style={{
                borderTopLeftRadius: '10px',
                borderTopRightRadius: '10px',
              }}
              width={'100%'}
              src={projeto[3]}
              alt=""
            />
          </Box>
          <Box width={'100%'} height={'45%'} padding={'20px'}>
            <Typography
              style={{ fontFamily: 'Tilt Warp, cursive', color: '#d0d0d0' }}
              variant="h4"
            >
              {projeto[1]}
            </Typography>
            <Typography
              variant="body1"
              style={{
                marginTop: '10px',
                fontFamily: 'Roboto, sans-serif',
                color: '#d0d0d0',
                fontWeight: 'lighter',
              }}
            >
              {projeto[2]}
            </Typography>
          </Box>
          <Box
            display={'flex'}
            justifyContent={'space-between'}
            padding={'10px'}
          >
            <Typography>
              <a
                target={'_blank'}
                style={{
                  color: '#cecece',
                  textDecoration: 'none',
                  fontFamily: 'Tilt Warp, cursive',
                }}
                href={projeto[4]}
                rel="noreferrer"
              >
                Visualizar
              </a>
            </Typography>
            <Typography>
              <a
                target={'_blank'}
                style={{
                  color: '#cecece',
                  fontFamily: 'Tilt Warp, cursive',
                }}
                href={projeto[5]}
                rel="noreferrer"
              >
                Ver código
              </a>
            </Typography>
          </Box>
        </Box>
      ))}
    </Grid>
  )
}
