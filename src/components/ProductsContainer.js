import React, { useEffect } from 'react';
import ProductItem from './ProductItem';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

function ProductsContainer() {
  const { items } = useSelector((store) => store.products);
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  function componentDidMount() {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    componentDidMount();
  }, []);

  return (
    <section>
      <header>
        <h1>Shop</h1>
      </header>
      <div className='cont text-center'>
        {items?.map((item) => {
          const { id, title, price, image } = item;
          return (
            <article key={id} className='product-item'>
              <div className='img-container'>
                <img
                  src={image}
                  alt={title}
                  className='product-img img-fluid'
                />
              </div>
              <div className='product-item-footer'>
                <h3>{title.substring(0, 66)}</h3>
                <h5>${price}</h5>
              </div>
              <button
                onClick={() => dispatch(addToCart(item))}
                className='add-to-cart-btn'
              >
                Add To Cart
              </button>
            </article>
          );
        })}
      </div>
      {/* </div> */}
    </section>
  );
}

export default ProductsContainer;
