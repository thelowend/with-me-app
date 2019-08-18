import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { LoginTypes } from './Actions'

export const loginLoading = (state) => ({
  ...state,
  loginIsLoading: true,
  loginErrorMessage: null,
})

export const loginSuccess = (state, { accessToken }) => ({
  ...state,
  accessToken: accessToken,
  loggedIn: true,
  loginIsLoading: false,
  loginErrorMessage: null,
})

export const loginFailure = (state, { errorMessage }) => ({
  ...state,
  loginIsLoading: false,
  loginErrorMessage: errorMessage,
})

export const reducer = createReducer(INITIAL_STATE, {
  [LoginTypes.LOGIN_LOADING]: loginLoading,
  [LoginTypes.LOGIN_SUCCESS]: loginSuccess,
  [LoginTypes.LOGIN_FAILURE]: loginFailure,
})
