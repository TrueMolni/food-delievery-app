import FoodItem from './FoodItem';
import scss from './food-list.module.scss';
import foodData from './foodMenu';

const FoodList = () => {
  const menuList = foodData.map(({ id, text, title, image }) => (
    <FoodItem key={id} title={title} image={image} text={text} />
  ));

  return (
    <div className={scss.container}>
      <ul className={scss.list}>{menuList}</ul>
    </div>
  );
};

export default FoodList;
