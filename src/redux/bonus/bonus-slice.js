import { createSlice } from '@reduxjs/toolkit';

import { fetchBonuses, addBonus, getTodayBonus } from './bonus-operations';

const initialState = {
  items: [],

  todayBonus: 0,
  loading: false,
  error: false,
  isFetching: false,
};

const bonusSlice = createSlice({
  name: 'bonus',
  initialState,

  reducers: {
    addBonusDirect: (state, { payload }) => {
      // console.log(payload);
      state.items = [...payload, ...state.items];
    },
  },

  extraReducers: {
    [fetchBonuses.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [fetchBonuses.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.items = payload;
    },
    [fetchBonuses.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    [addBonus.pending]: state => {
      state.isFetching = true;
      state.loading = true;
      state.error = null;
    },
    [addBonus.fulfilled]: (state, { payload }) => {
      state.isFetching = false;

      state.loading = false;
      state.items = [...payload, ...state.items];
      state.todayBonus += payload.reduce((acc, el) => (acc += el.bonus), 0);
    },
    [addBonus.rejected]: (state, { payload }) => {
      state.isFetching = false;

      state.loading = false;
      state.error = payload;
    },

    [getTodayBonus.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [getTodayBonus.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.todayBonus = payload;
    },
    [getTodayBonus.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { addBonusDirect } = bonusSlice.actions;

export default bonusSlice.reducer;
