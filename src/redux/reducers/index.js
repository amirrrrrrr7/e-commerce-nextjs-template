import { combineReducers } from '@reduxjs/toolkit';

import {
    getToken,
    SubmitLoading,
    recaptchaCaller
} from './user'
import {
    categoriesList,
} from './category'

export default combineReducers({
    getToken,
    SubmitLoading,
    recaptchaCaller,
    categoriesList,
})