import { createReducer } from '@reduxjs/toolkit'

export const categoriesList = createReducer(
		{},
		{
			GET_CATEGORIES: (state, action) => action.payload
		}
	)