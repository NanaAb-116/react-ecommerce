import React from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '../features/cart/cartSlice';
import { closeModal } from '../features/modal/modalSlice';

function Modal() {
  const dispatch = useDispatch();
  return <aside className='modal-container'></aside>;
}

export default Modal;
