import React from 'react'
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './Context';

const Navbar = () => {
    const { openNav } = useGlobalContext()
  return (
    <nav className='nav'>
        <div className='nav-center'>
            <div className='nav-header'>
                <img src={logo} alt='strpe-logo' className='nav-logo'></img>
                <button type='button' className='btn toggle-btn' onClick={openNav}>
                    <FaBars/>
                </button>
            </div>
            <ul className='nav-links'>
                <li>
                <button type='button' className='link-btn'>products</button>
                </li>
                <li>
                <button type='button' className='link-btn'>Developer</button>
                </li>
                <li>
                <button type='button' className='link-btn'>Company</button>
                </li>
            </ul>
            <button type='button' className='btn signin-btn'>Sign in</button>
        </div>
    </nav>
  )
}

export default Navbar