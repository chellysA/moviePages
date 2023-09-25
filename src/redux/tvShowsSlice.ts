import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tvShows: [],
};

export const tvShowsSlice = createSlice({
  name: 'tvShows',
  initialState,
  reducers: {
    addTvShows: (state, action) => {
      const tvShows = action.payload;
      state.tvShows = tvShows;
    },
  },
});

export const { addTvShows } = tvShowsSlice.actions;
export default tvShowsSlice.reducer;
