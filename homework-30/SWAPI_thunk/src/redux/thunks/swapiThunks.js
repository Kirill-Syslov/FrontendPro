import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPeople = createAsyncThunk(
  'swapi/fetchPeople',
  async (id, { getState }) => {
    const response = await axios.get(`https://swapi.dev/api/people/${id}/`);
    const currentPeople = getState().swapi.people;
    return [...currentPeople, response.data]; 
  }
);
