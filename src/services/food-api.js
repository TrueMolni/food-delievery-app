import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  //   baseURL: 'https://your-pet-project-backend.onrender.com/',
});

export const getAllFood = async () => {
  const { data } = await instance.get('api/food');
  return data;
};
