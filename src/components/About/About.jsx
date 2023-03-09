import { Grid, Typography } from '@mui/material'
import React from 'react'

export function About() {
  const about = [
    [
      1,
      'Em 2020, durante a pandemia comecei meus estudos em HTML5 e CSS3 no Curso em Vídeo',
    ],
    [
      2,
      `Em 2021, comecei a me apronfundar em JavaScript e comecei a fazer meus primeiros mini-projetos, aquelas telas 'feias' que todo programador já fez no começo.`,
    ],
    [
      3,
      'Em 2022, consegui meu primeiro emprego na área de programação, na Unimed Vale do Cai. Quando comecei confesso que fiquei assustado porque não entendia nada do que o pessoal falava, pois eles usam React e eu para falar a verdade nem sabia oq isso significava.',
    ],
    [
      4,
      'Em 2023, que por acaso e quando estou fazendo esse site, vejo que mesmo com apenas 1 ano de experiencia de trabalho já desenvolvi muito aprendizado e conhecimento.',
    ],
  ]
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
          jovem já tive varias conquistas pessoais das quais me orgulho muito.
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
