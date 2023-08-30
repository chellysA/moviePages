import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: '',
  overview: '',
};

export const userSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    getMovies: (state, action) => {
      const { movies, overview } = action.payload;
      state.movies = movies;
      state.overview = overview;
    },
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const { getMovies, addMovies } = userSlice.actions;
export default userSlice.reducer;
