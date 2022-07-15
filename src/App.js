import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productsFetch } from './features/product/productSlice';
import { calculateTotals } from './features/cart/cartSlice';

import SharedLayout from './components/SharedLayout';
import ProductsContainer from './components/ProductsContainer';
import CartContainer from './components/cart/CartContainer';
import Error from './components/Error';
import Loading from './components/Loading';
import SingleItem from './components/SingleItem';

function App() {
  const { isLoading } = useSelector((store) => store.products);
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsFetch());
  }, []);
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route path='/' element={<ProductsContainer />}>
              {/* <Route path='/products/:id' element={<SingleItem />} /> */}
            </Route>
            <Route path='/cart' element={<CartContainer />} />
            <Route path='*' element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
