import { NavLink } from 'react-router-dom';
import menuItem from './menuItem';
import scss from './header.module.scss';

const Header = () => {
  const menuList = menuItem.map(({ id, text, link }) => (
    <li className={scss.item} key={id}>
      <NavLink className={scss.link} to={link}>
        {text}
      </NavLink>
    </li>
  ));

  return (
    <div className={scss.contaiiner}>
      <header className={scss.header}>
        <ul className={scss.list}>{menuList}</ul>
      </header>
    </div>
  );
};

export default Header;
