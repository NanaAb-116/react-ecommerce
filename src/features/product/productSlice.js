import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://fakestoreapi.com/products';

const initialState = {
  items: [],
  isLoading: true,
};

export const productsFetch = createAsyncThunk(
  'products/productsFetch',
  async (thunkAPI) => {
    try {
      const response = await axios.get(url);
      return response?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    [productsFetch.pending]: (state) => {
      state.isLoading = true;
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },
    [productsFetch.rejected]: (state, action) => {
      console.log(action);
      state.isLoading = false;
    },
  },
});

export default productSlice.reducer;
