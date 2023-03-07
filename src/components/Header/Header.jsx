import React from 'react'
import './header-styles.css'

export function Header({ handleClickMenu }) {
  return (
    <header className="header">
      <h2 style={{ cursor: 'pointer' }} onClick={() => handleClickMenu('menu')}>
        Bruno Fröhlich
      </h2>
      <table>
        <th>
          <ul>
            <button
              className="button-header"
              onClick={() => handleClickMenu('projetos')}
            >
              Projetos
            </button>
          </ul>
        </th>
        <th>
          <ul>
            <button
              className="button-header"
              onClick={() => handleClickMenu('sobre')}
            >
              Sobre Mim
            </button>
          </ul>
        </th>
        <th>
          <ul>
            <button
              className="button-header"
              onClick={() => handleClickMenu('contatos')}
            >
              Contatos
            </button>
          </ul>
        </th>
      </table>
    </header>
  )
}
