import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
  genres: [],
  id: 0,
  videos: [],
  totalPages: 0,
  actualPage: 1,
  details: [],
  credits: [],
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
    addDetails: (state, action) => {
      state.details = action.payload;
    },
    addCredits: (state, action) => {
      state.credits = action.payload;
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
  addDetails,
  addCredits,
} = moviesSlice.actions;
export default moviesSlice.reducer;
