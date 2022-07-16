import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingBag } from 'react-icons/fa';
import { useSelector } from 'react-redux/';

function NavbarComp() {
  const { amount } = useSelector((store) => store.cart);
  return (
    <nav className='navbar'>
      <Link to='/'>
        <h2>SHOP</h2>
      </Link>
      <Link to='/cart'>
        <div className='bag'>
          <FaShoppingBag />
          <span className='bag-amount'>
            <span>{amount}</span>
          </span>
        </div>
      </Link>
    </nav>
  );
}

export default NavbarComp;
