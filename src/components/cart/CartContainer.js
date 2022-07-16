import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CgArrowLongLeft } from 'react-icons/cg';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../../features/cart/cartSlice';
import CartItem from './CartItem';

function CartContainer() {
  const { cartItems, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  function componentDidMount() {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    componentDidMount();
  }, []);

  if (cartItems.length < 1) {
    return (
      <header>
        <h1>Your cart is empty</h1>
      </header>
    );
  }
  return (
    <section className='cart-section'>
      <header>
        <h1>Your Cart</h1>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer className='cart-footer'>
        <div className='clear'>
          <button className='clear-btn' onClick={() => dispatch(clearCart())}>
            Clear Cart
          </button>
        </div>
        <div className='total text-center'>
          <h5>total: ${total.toFixed(2)}</h5>
          <button className='checkout-btn'>Checkout</button>
          <Link to='/'>
            <CgArrowLongLeft />
            Continue Shopping
          </Link>
        </div>
      </footer>
    </section>
  );
}

export default CartContainer;
