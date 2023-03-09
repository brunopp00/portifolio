import { MenuOutlined } from '@mui/icons-material'
import {
  AppBar,
  Button,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

export function Header({ handleClickMenu }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Grid container>
      <Grid item xs={12}>
        <AppBar style={{ backgroundColor: 'rgb(41, 40, 40)' }}>
          <Box
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            padding={'0px 30px'}
          >
            <Typography
              variant="h4"
              style={{ cursor: 'pointer', fontFamily: 'Tilt Warp, cursive' }}
              onClick={() => handleClickMenu('menu')}
            >
              BF
            </Typography>
            <IconButton color="inherit" onClick={() => setIsOpen(true)}>
              <MenuOutlined />
            </IconButton>
          </Box>
        </AppBar>
      </Grid>
      <Drawer anchor={'right'} open={isOpen} onClose={() => setIsOpen(false)}>
        <Box
          padding={'20px'}
          height={'100vh'}
          display={'flex'}
          flexDirection={'column'}
          style={{ backgroundColor: 'rgb(41, 40, 40)' }}
        >
          <Button
            style={{ width: '200px', color: 'white' }}
            variant="text"
            className="button-header"
            onClick={() => {
              setIsOpen(false)
              handleClickMenu('projetos')
            }}
          >
            Projetos
          </Button>
          <Divider style={{ color: 'white' }} />
          <Button
            style={{ width: '200px', color: 'white' }}
            variant="text"
            className="button-header"
            onClick={() => {
              setIsOpen(false)
              handleClickMenu('sobre')
            }}
          >
            Sobre Mim
          </Button>
          <Divider style={{ color: 'white' }} />
          <Button
            style={{ width: '200px', color: 'white' }}
            variant="text"
            className="button-header"
            onClick={() => {
              setIsOpen(false)
              handleClickMenu('contatos')
            }}
          >
            Contatos
          </Button>
        </Box>
      </Drawer>
    </Grid>
  )
}
