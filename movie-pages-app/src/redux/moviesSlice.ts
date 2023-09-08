import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
  genres: [],
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, action) => {
      const movies = action.payload;
      state.movies = movies;
    },
    addGenres: (state, action) => {
      state.genres = action.payload;
    },
  },
});

export const { addMovies, addGenres } = moviesSlice.actions;
export default moviesSlice.reducer;
