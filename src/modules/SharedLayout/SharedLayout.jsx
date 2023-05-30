import { Outlet } from 'react-router-dom';
import scss from './shared-layout.module.scss';
import Header from 'modules/Header';
import Footer from 'modules/Footer';

const SharedLayout = () => {
  return (
    <div className={scss.container}>
      <Header />
      <main>{<Outlet />}</main>
      <Footer />
    </div>
  );
};

export default SharedLayout;
