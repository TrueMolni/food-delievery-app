import React from 'react';
import AddressForm from 'modules/AddressForm/AddressForm';
import OrderList from 'modules/OrderList/OrderList';
import scss from './cart.module.scss';

const Cart = () => {
  return (
    <form className={scss.form}>
      <div className={scss.formWrapper}>
        <AddressForm />
        <OrderList />
      </div>
      <button className={scss.btn} type="submit">
        Submit
      </button>
    </form>
  );
};

export default Cart;
