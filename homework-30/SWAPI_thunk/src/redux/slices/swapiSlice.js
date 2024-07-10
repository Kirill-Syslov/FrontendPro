import { createSlice } from '@reduxjs/toolkit';
import { fetchPeople } from '../thunks/swapiThunks';

const swapiSlice = createSlice({
  name: 'swapi',
  initialState: {
    people: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearData: (state) => {
      state.people = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPeople.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPeople.fulfilled, (state, action) => {
        state.loading = false;
        state.people = action.payload;
      })
      .addCase(fetchPeople.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearData } = swapiSlice.actions;
export default swapiSlice.reducer;
