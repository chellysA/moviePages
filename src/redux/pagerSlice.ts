import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pager: 0,
  totalPages: 0,
  actualPage: 1,
};

export const pagerSlice = createSlice({
  name: 'pager',
  initialState,
  reducers: {
    addPager: (state, action) => {
      const pager = action.payload;
      state.pager = pager;
    },
    addTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
    addActualPage: (state, action) => {
      state.actualPage = action.payload;
    },
  },
});

export const { addPager, addTotalPages, addActualPage } = pagerSlice.actions;
export default pagerSlice.reducer;
