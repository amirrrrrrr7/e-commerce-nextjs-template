
import {BASE_URL} from '../BASE'

export const AUTH_URL = `${BASE_URL}/auth`

export const SIGNUP_URL = `${AUTH_URL}/signup`

export const GENERATE_EMAIL_URL = `${SIGNUP_URL}/generate-email-token`

export const EMAIL_ACTIVATION_URL = `${SIGNUP_URL}/email-activation`

export const LOGIN_URL = `${AUTH_URL}/login`

export const GET_USER_URL = `${LOGIN_URL}/user`

export const REFRESH_USER_TOKEN_URL = `${LOGIN_URL}/refresh`

export const FORGOT_PASS_URL = `${AUTH_URL}/forgot-password`

export const FORGOT_PASS_TOKEN_URL = `${FORGOT_PASS_URL}/generate-password-token`

export const RESET_PASS_URL = `${AUTH_URL}/reset-password`

export const RESET_PASS_TOKEN_URL = `${RESET_PASS_URL}/generate-password-token`

export const LOGOUT_URL = `${AUTH_URL}/logout`