import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nowPlaying: [],
  genres: [],
  videos: [],
  details: [],
  credits: [],
};

export const nowPlayingSlice = createSlice({
  name: 'nowPlaying',
  initialState,
  reducers: {
    addNowPlaying: (state, action) => {
      const nowPlaying = action.payload;
      state.nowPlaying = nowPlaying;
    },
    addGenres: (state, action) => {
      state.genres = action.payload;
    },
    addVideos: (state, action) => {
      state.videos = action.payload;
    },
    addDetails: (state, action) => {
      state.details = action.payload;
    },
    addCredits: (state, action) => {
      state.credits = action.payload;
    },
  },
});

export const { addNowPlaying, addGenres, addVideos, addDetails, addCredits } =
  nowPlayingSlice.actions;
export default nowPlayingSlice.reducer;
