import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  details: [],
  similar: [],
  movieGenres: [],
  tvGenres: [],
  videos: [],
  credits: [],
};

export const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    addDetails: (state, action) => {
      const details = action.payload;
      state.details = details;
    },
    addMovieGenres: (state, action) => {
      state.movieGenres = action.payload;
    },
    addTvGenres: (state, action) => {
      state.tvGenres = action.payload;
    },
    addVideos: (state, action) => {
      state.videos = action.payload;
    },
    addCredits: (state, action) => {
      state.credits = action.payload;
    },
    addSimilar: (state, action) => {
      state.similar = action.payload;
    },
  },
});

export const { addDetails, addMovieGenres, addTvGenres, addVideos, addCredits, addSimilar } =
  detailsSlice.actions;
export default detailsSlice.reducer;
