import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nowPlaying: [],
};

export const nowPlayingSlice = createSlice({
  name: 'nowPlaying',
  initialState,
  reducers: {
    addNowPlaying: (state, action) => {
      const nowPlaying = action.payload;
      state.nowPlaying = nowPlaying;
    },
  },
});

export const { addNowPlaying } = nowPlayingSlice.actions;
export default nowPlayingSlice.reducer;
