import { createSlice } from '@reduxjs/toolkit';

export const toDoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addTodo } = toDoSlice.actions;

export default toDoSlice.reducer;