import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, action) => {
      const movies = action.payload;
      state.movies = movies;
    },
  },
});

export const { addMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
