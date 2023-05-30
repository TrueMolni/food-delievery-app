import scss from './food-item.module.scss';
import Cart from 'modules/CartBtn/CartBtn';

const FoodItem = ({ title, text, image }) => {
  return (
    <li className={scss.itemContainer}>
      <div>
        <img className={scss.foodImage} src={image} alt={title} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
        <Cart />
      </div>
    </li>
  );
};

export default FoodItem;
