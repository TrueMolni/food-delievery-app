import { nanoid } from 'nanoid';

const navItems = [
  {
    id: nanoid(),
    text: 'Home',
    link: '/',
  },
  {
    id: nanoid(),
    text: 'Cart',
    link: '/cart',
  },
];

export default navItems;
