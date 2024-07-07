import { configureStore } from '@reduxjs/toolkit';
import toDoSlice from './slice/toDoSlice';


export const store = configureStore({
  reducer: {
    todos: toDoSlice,
  },
});
