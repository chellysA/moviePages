import { configureStore } from '@reduxjs/toolkit';
import nowPlayingReducer from './nowPlayingSlice';
import pagerReducer from './pagerSlice';
import detailsReducer from './detailsSlice';
import searcherReducer from './searcherSlice';
import moviesReducer from './moviesSlice';
import tvShowsReducer from './tvShowsSlice';

export const store = configureStore({
  reducer: {
    nowPlaying: nowPlayingReducer,
    pager: pagerReducer,
    details: detailsReducer,
    searcher: searcherReducer,
    movies: moviesReducer,
    tvShows: tvShowsReducer,
  },
});
