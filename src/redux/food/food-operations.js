import * as api from '../../services/food-api';
const { createAsyncThunk } = require('@reduxjs/toolkit');

const getAllFood = createAsyncThunk(
  'food/getAllFood',
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.getAllFood();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const operations = {
  getAllFood,
};

export default operations;
