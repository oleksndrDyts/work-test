import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'api/auth';
import Notiflix from 'notiflix';

export const login = createAsyncThunk(
  'user/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await api.login(credentials);
      return data;
    } catch (err) {
      const errMessage =
        err.response !== undefined
          ? 'Email or password is incorrect'
          : err.message;

      Notiflix.Notify.failure(errMessage);

      return rejectWithValue(errMessage);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'user/refresh',
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().user.token;

    // console.log(thunkAPI.getState().auth);
    // console.log(token);
    if (token === null) {
      return thunkAPI.rejectWithValue(5);
    }

    try {
      const response = await api.getCurrentUser(token);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
