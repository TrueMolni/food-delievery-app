import scss from './home-page.module.scss';
import FoodList from 'modules/FoodList/FoodList';
const HomePage = () => {
  return (
    <div className={scss.page}>
      <h1>Home page</h1>
      <FoodList />
    </div>
  );
};

export default HomePage;
