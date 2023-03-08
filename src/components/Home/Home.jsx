import React from 'react'
import fotoBruno from '../../assets/Foto-Bruno.png'
import './home-styles.css'

export function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="text">
          <p>
            Bruno Fröhlich
            {/* Olá, meu nome é Bruno Fröhlich, atualmente trabalho como estagiário em
          desenvolvimento de software na Unimed Vale do Caí. Durante meu estágio
          na Unimed, contribui na criação de diversos programas que são usados
          por toda a cooperativa. Possuo habilidades avançadas nas linguagens
        JavaScript e TypeScript. */}
          </p>
        </div>
        <div className="imagem">
          <img src={fotoBruno} alt="" />
        </div>
      </div>
    </div>
  )
}
