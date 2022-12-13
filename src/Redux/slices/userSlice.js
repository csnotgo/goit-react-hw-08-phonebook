import { createSlice } from '@reduxjs/toolkit';
import {
  loginUserThunk,
  logoutUserThunk,
  refreshUserThunk,
  registerUserThunk,
} from 'Redux/operations/userOperation';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: { name: '', email: '' },
    token: null,
    isLogged: false,
    isRefreshing: false,
  },
  extraReducers: builder => {
    builder
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLogged = true;
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLogged = true;
      })
      .addCase(logoutUserThunk.fulfilled, state => {
        state.user = { name: '', email: '' };
        state.token = null;
        state.isLogged = false;
      })
      .addCase(refreshUserThunk.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUserThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLogged = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUserThunk.rejected, state => {
        state.isRefreshing = false;
      });
  },
});
