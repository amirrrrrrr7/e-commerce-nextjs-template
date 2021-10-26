
import { createReducer } from '@reduxjs/toolkit'

export const getToken = createReducer({}, {GET_TOKEN: (state, action) => action.payload})
export const SubmitLoading = createReducer(false, {SUBMIT_LOADING: (state, action) => action.payload})
export const recaptchaCaller = createReducer(0, {RECAPTCHA_CALLER: (state, action) => state + (action.payload || 1)})
