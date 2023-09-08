import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
  genres: [],
  id: 0,
  details: [],
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
    addId: (state, action) => {
      state.id = action.payload;
    },
    addDetails: (state, action) => {
      state.details = action.payload;
    },
  },
});

export const { addMovies, addGenres, addId, addDetails } = moviesSlice.actions;
export default moviesSlice.reducer;
