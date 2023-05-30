import { createSlice } from '@reduxjs/toolkit';
import operations from './food-operations';

const initialState = {
  allFood: [],
  isError: null,
  isLoading: false,
};

const foodSlice = createSlice({
  name: 'food',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(operations.getAllFood.pending, store => {
        store.isLoading = true;
        store.isError = null;
        store.allFood = [];
      })
      .addCase(operations.getAllFood.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.isError = null;
        store.allFood = payload;
      })
      .addCase(operations.getAllFood.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.isError = payload;
        store.allFood = [];
      });
  },
});

export default foodSlice.reducer;
