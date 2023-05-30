import { combineReducers } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import foodReducer from './food/food-slice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  food: foodReducer,
});

export default persistReducer(persistConfig, rootReducer);
