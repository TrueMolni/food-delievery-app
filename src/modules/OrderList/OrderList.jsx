import React from 'react';
// import PropTypes from 'prop-types';
import scss from './order-list.module.scss';

const OrderList = props => {
  return (
    <div className={scss.container}>
      <h2>OrderList</h2>
      <ul></ul>
    </div>
  );
};

// OrderList.propTypes = {};

export default OrderList;

// const FoodList = () => {
//   const menuList = foodData.map(({ id, text, title, image }) => (
//     <FoodItem key={id} title={title} image={image} text={text} />
//   ));

//   return (
//     <div className={scss.container}>
//       <ul className={scss.list}>{menuList}</ul>
//     </div>
//   );
// };
