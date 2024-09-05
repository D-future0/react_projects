import React, { useRef, useEffect, useState } from 'react'
import { useGlobalContext } from './Context'

const Submenu = () => {
    const { isOpenSubmenu, location, page: {page, links } } = useGlobalContext()
    const [columns, setColumns] =useState('col-2') 
    const container = useRef(null)
    useEffect(()=>{
      setColumns('col-2')
      const {center, bottom} = location
      const submenu = container.current
      submenu.style.left =`${center}px`
      submenu.style.top =`${bottom}px`
      if (links.length === 3) {
        setColumns('col-3')
      }
      if (links.length > 3) {
        setColumns('col-4')
      }
    }, [location, links])
  return (
    <aside className={`${isOpenSubmenu?  'submenu show' : 'submenu'}`} ref={container}>
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((links, index)=>{
          const { url, icon, label } = links
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          )
        })}
      </div>
    </aside>
  )
}

export default Submenu