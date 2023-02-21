import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'api/bonus';
import Notiflix from 'notiflix';

export const fetchBonuses = createAsyncThunk(
  'bonus/fetch',
  async (date, { rejectWithValue }) => {
    try {
      const data = await api.getBonuses(date);
      return data;
    } catch (error) {
      Notiflix.Notify.failure(error.response.data.message);
      // toast.error(error.response.data.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const addBonus = createAsyncThunk(
  'bonus/add',
  async (data, { rejectWithValue }) => {
    try {
      console.log(data);
      const result = await api.addBonus(data);
      Notiflix.Notify.success('Успішно добавлено');

      return result;
    } catch (error) {
      Notiflix.Notify.failure(error.response.data.message);

      return rejectWithValue(error.response.data.message);
    }
  }
);

export const getTodayBonus = createAsyncThunk(
  'bonus/today',
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.getTodayBonus();
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);
