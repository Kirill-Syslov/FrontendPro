import { configureStore } from '@reduxjs/toolkit';
import swapiReducer from './slices/swapiSlice';

export const store = configureStore({
  reducer: {
    swapi: swapiReducer,
  },
});
