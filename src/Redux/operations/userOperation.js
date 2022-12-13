import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  loginUser,
  logoutUser,
  refreshUser,
  registerUser,
} from 'services/usersApi';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerUserThunk = createAsyncThunk(
  'users/signup',
  async (user, { rejectWithValue }) => {
    try {
      const response = await registerUser(user);
      token.set(response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const loginUserThunk = createAsyncThunk(
  'users/login',
  async (user, { rejectWithValue }) => {
    try {
      const response = await loginUser(user);
      token.set(response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logoutUserThunk = createAsyncThunk(
  'users/logout',
  async (_, { rejectWithValue }) => {
    try {
      await logoutUser();
      token.unset();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const refreshUserThunk = createAsyncThunk(
  'users/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistToken = state.user.token;

    if (persistToken === null) {
      return rejectWithValue();
    }

    token.set(persistToken);
    try {
      const response = await refreshUser();
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
