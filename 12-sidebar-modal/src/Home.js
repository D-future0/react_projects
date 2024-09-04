import React from 'react'
import { FaBars } from 'react-icons/fa';
import { useGloberProvider } from './Context';

const Home = () => {
  const { isOpenSidebar, isOpenModal } = useGloberProvider()
console.log(isOpenSidebar)
  return (
    <main>
      <button className='sidebar-toggle' onClick={isOpenSidebar}>
        <FaBars />
      </button>
      <button className='btn' onClick={isOpenModal}>
        show modal
      </button>
    </main>
  )
}

export default Home