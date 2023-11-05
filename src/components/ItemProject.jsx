import React, { useState } from 'react'
import { BiLinkExternal, BiLogoGithub } from 'react-icons/bi'

export const ItemProject = ({ projeto }) => {
  const [showInfo, setShowInfo] = useState(true)

  const handleMouseEnter = () => {
    setShowInfo(false)
  }

  const handleMouseLeave = () => {
    setShowInfo(true)
  }

  const handleGitHubClick = () => {
    window.open(projeto.urlGitHub, '_blank')
  }

  const handleWebsiteClick = () => {
    if (projeto.urlSite) {
      window.open(projeto.urlSite, '_blank')
    }
  }

  return (
    <div
      className="flex flex-col transform transition-transform hover:scale-110"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={projeto.image}
        alt=""
      />
      <div className="p-16 gap-3 w-full h-full z-10 bg-zinc-950 bg-opacity-50 flex flex-col items-center justify-center border-b-4 border-default">
        {showInfo ? (
          <>
            <div>
              <p className="text-white text-2xl font-bold">{projeto.name}</p>
            </div>
            <div className="flex text-sky-500">
              {projeto.icons.map((icon) => {
                return icon
              })}
            </div>
          </>
        ) : (
          <div className="flex justify-between items-end gap-4">
            <button
              title="Repositório GitHub"
              className="text-white"
              onClick={handleGitHubClick}
            >
              <BiLogoGithub size={35} />
            </button>
            {projeto.urlSite && (
              <button
                title="Acessar site"
                className="text-white"
                onClick={handleWebsiteClick}
              >
                <BiLinkExternal size={35} />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
