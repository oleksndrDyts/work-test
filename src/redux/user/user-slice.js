import { createSlice } from '@reduxjs/toolkit';

import { login, fetchCurrentUser } from './user-operations';

const initialState = {
  user: { name: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',

  initialState,

  reducers: {
    removeError: state => {
      state.error = null;
    },
  },

  extraReducers: {
    [login.pending]: (state, { payload }) => {
      state.isLoading = true;
      state.isLoggedIn = false;
      state.error = null;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    [login.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = payload;
    },

    [fetchCurrentUser.pending]: state => {
      state.isLoading = true;
    },
    [fetchCurrentUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [fetchCurrentUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
  },
});

export const { removeError } = userSlice.actions;

export default userSlice.reducer;
