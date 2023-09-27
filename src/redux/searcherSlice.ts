import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searcher: [],
};

export const searcherSlice = createSlice({
  name: 'searcher',
  initialState,
  reducers: {
    addSearcher: (state, action) => {
      const searcher = action.payload;
      state.searcher = searcher;
    },
  },
});
export const { addSearcher } = searcherSlice.actions;
export default searcherSlice.reducer;
