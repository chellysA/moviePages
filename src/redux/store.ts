import { configureStore } from '@reduxjs/toolkit';
import nowPlayingReducer from './nowPlayingSlice';
import pagerReducer from './pagerSlice';

export const store = configureStore({
  reducer: { nowPlaying: nowPlayingReducer, pager: pagerReducer },
});
