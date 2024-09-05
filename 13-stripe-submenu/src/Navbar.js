import React from 'react'
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './Context';

const Navbar = () => {
    const { openNav, openSubmenu, closeSubmenu } = useGlobalContext()
    const displaySubmenu = (event)=>{
        const page = event.target.textContent
        const tempBtn = event.target.getBoundingClientRect()
        const center = (tempBtn.left + tempBtn.right) / 2
        const bottom = tempBtn.bottom - 3
        openSubmenu(page, { center, bottom })
    }
    const submenuHandler = (event)=>{
        if(!event.target.classList.contains('link-btn')){
            closeSubmenu()
        }
    }
  return (
    <nav className='nav' onMouseOver={submenuHandler}>
        <div className='nav-center'>
            <div className='nav-header'>
                <img src={logo} alt='strpe-logo' className='nav-logo'></img>
                <button type='button' className='btn toggle-btn' onClick={openNav}>
                    <FaBars/>
                </button>
            </div>
            <ul className='nav-links'>
                <li>
                <button type='button' className='link-btn' onMouseOver={displaySubmenu}>products</button>
                </li>
                <li>
                <button type='button' className='link-btn' onMouseOver={displaySubmenu}>developers</button>
                </li>
                <li>
                <button type='button' className='link-btn' onMouseOver={displaySubmenu}>company</button>
                </li>
            </ul>
            <button type='button' className='btn signin-btn'>Sign in</button>
        </div>
    </nav>
  )
}

export default Navbar