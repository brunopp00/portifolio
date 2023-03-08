import React from 'react'
import './projects-styles.css'

export function Projects({ listaProjetos }) {
  console.log(listaProjetos)
  return (
    <div id="projetos">
      <div className="container">
        {listaProjetos.map((projeto) => (
          <div className="projeto" key={projeto[0]}>
            <div className="img">
              <img src={projeto[3]} alt="" />
            </div>
            <div className="text">
              <h1>{projeto[1]}</h1>
              <p>{projeto[2]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
