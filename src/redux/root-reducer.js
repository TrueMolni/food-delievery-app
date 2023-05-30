import { combineReducers } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import foodReducer from './food/food-slice';

const persistConfig = {
  key: 'root',
  storage,
};

const someReducer = persistReducer(persistConfig);

const rootReducer = combineReducers({
  some: someReducer,
  food: foodReducer,
});

export default rootReducer;
