import Cart from 'modules/Cart/Cart';
import scss from './cart-page.module.scss';
const CartPage = () => {
  return (
    <div className={scss.page}>
      <h1>Cart page</h1>
      <Cart />
    </div>
  );
};

export default CartPage;
