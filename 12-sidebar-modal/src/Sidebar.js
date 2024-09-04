import React from 'react'
import logo from './logo.svg';
import { FaTimes } from 'react-icons/fa';
import { social, links } from './data';
import { useGloberProvider } from './Context';

const Sidebar = () => {
  const { openSidebar, isCloseSidebar } = useGloberProvider()
  return (
    <aside className={`${openSidebar? 'sidebar show-sidebar' : 'sidebar'}`}>
        <div className='sidebar-header'>
            <img src={logo} className='logo' alt='logo'></img>
          <button className='close-btn' onClick={isCloseSidebar}>
          <FaTimes />
        </button>
        </div>
        <ul className='links'>
            {links.map((link)=>{
                const { id, url, text, icon } = link;
                return (
                    <li key={id}>
                      <a href={url}>
                        {icon}
                        {text}
                      </a>
                    </li>
                  );
            })}
        </ul>
        <ul className='social-icons'>
            {social.map((link)=>{
                const { id, url, text, icon } = link;
                return (
                    <li key={id}>
                      <a href={url}>
                        {icon}
                        {text}
                      </a>
                    </li>
                  );
            })}
        </ul>
    </aside>
  )
}

export default Sidebar