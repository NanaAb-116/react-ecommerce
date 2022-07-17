import React from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { increase, decrease, removeItem } from '../../features/cart/cartSlice';
import { useDispatch } from 'react-redux';

function CartItem({ id, image, title, price, amount }) {
  const dispatch = useDispatch();

  return (
    <article className='cart-item'>
      <div className='image-container'>
        <img src={image} alt={title} className='cart-image' />
        <h3>{title}</h3>
      </div>
      <div className='amount-container'>
        <AiOutlinePlus onClick={() => dispatch(increase(id))} />
        <h3 className='mb-1'>{amount}</h3>
        <AiOutlineMinus
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease(id));
          }}
        />
      </div>
      <div className='price'>
        <h4>${price}</h4>
      </div>
    </article>
  );
}

export default CartItem;
