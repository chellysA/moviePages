import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  details: [],
  similar: [],
  genres: [],
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
    addGenres: (state, action) => {
      state.genres = action.payload;
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

export const { addDetails, addGenres, addVideos, addCredits, addSimilar } =
  detailsSlice.actions;
export default detailsSlice.reducer;
