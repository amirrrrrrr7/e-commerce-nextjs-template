import { configureStore } from '@reduxjs/toolkit';
import reducers from '../reducers';

// import { userSlice } from 'features/User/UserSlice';

export const store = configureStore({
    reducer: reducers
})