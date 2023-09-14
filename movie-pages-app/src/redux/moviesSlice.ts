import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
  genres: [],
  id: 0,
  videos: [],
  totalPages: 0,
  actualPage: 1,
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
    addVideos: (state, action) => {
      state.videos = action.payload;
    },
    addTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
    addActualPage: (state, action) => {
      state.actualPage = action.payload;
    },
  },
});

export const {
  addMovies,
  addGenres,
  addId,
  addVideos,
  addTotalPages,
  addActualPage,
} = moviesSlice.actions;
export default moviesSlice.reducer;
