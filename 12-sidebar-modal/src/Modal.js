import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { useGloberProvider } from './Context';

const Modal = () => {
  const { openModal, isCloseModal } = useGloberProvider()

  return (
    <div
      className={`${openModal? 'modal-overlay show-modal' : 'modal-overlay'}`}
    >
      <div className='modal-container'>
        <h3>modal content</h3>
        <button className='close-modal-btn' onClick={isCloseModal}>
          <FaTimes></FaTimes>
        </button>
      </div>
    </div>
  )
}

export default Modal