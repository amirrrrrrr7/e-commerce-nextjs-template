
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import request from 'tools/Request';

  export const fetchUserBytoken = createAsyncThunk(
    'users/fetchUserByToken',
    async ({ token }, thunkAPI) => {
      try {
        const response = await request(`/auth/login`,
          {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              Authorization: token,
              'Content-Type': 'application/json',
            },
          }
        );
        let data = await response.json();
        console.log('data', data, response.status);
  
        if (response.status === 200) {
          return { ...data };
        } else {
          return thunkAPI.rejectWithValue(data);
        }
      } catch (e) {
        console.log('Error', e.response.data);
        return thunkAPI.rejectWithValue(e.response.data);
      }
    }
  );
  

export const userSlice = createSlice({
    name: 'user',
    initialState: {
      username: '',
      email: '',
      password:'',
      name: '',
      first_name: '',
      last_name: '',
      description: '',
      access_token: '',

      // isFetching: false,
      // isSuccess: false,
      // isError: false,
      // errorMessage: '',
    },
    reducers: {
      clearState: (state) => {
        state.isError = false;
        state.isSuccess = false;
        state.isFetching = false;
  
        return state;
      },
    },
    extraReducers: {

      [fetchUserBytoken.pending]: (state) => {
        state.isFetching = true;
      },
      [fetchUserBytoken.fulfilled]: (state, { payload }) => {
        state.isFetching = false;
        state.isSuccess = true;
  
        state.email = payload.email;
        state.username = payload.name;
      },
      [fetchUserBytoken.rejected]: (state) => {
        console.log('fetchUserBytoken');
        state.isFetching = false;
        state.isError = true;
      },
    },
  });

  export const { clearState } = userSlice.actions;

  export const userSelector = (state) => state.user;