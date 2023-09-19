import { configureStore } from '@reduxjs/toolkit';
import nowPlayingReducer from './nowPlayingSlice';
import pagerReducer from './pagerSlice';
import detailsReducer from './detailsSlice';
import searcherReducer from './searcherSlice';

export const store = configureStore({
  reducer: {
    nowPlaying: nowPlayingReducer,
    pager: pagerReducer,
    details: detailsReducer,
    searcher: searcherReducer,
  },
});
