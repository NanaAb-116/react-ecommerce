import { Outlet } from 'react-router-dom';
import NavbarComp from './NavbarComp';

const SharedLayout = () => {
  return (
    <>
      <NavbarComp />
      <Outlet />
    </>
  );
};

export default SharedLayout;
