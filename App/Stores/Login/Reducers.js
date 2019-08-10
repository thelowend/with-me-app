/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { LoginTypes } from './Actions'

export const loginLoading = (state) => ({
  ...state,
  loginLoading: true,
  loginError: null,
})

export const loginSuccess = (state, { accessToken }) => ({
  ...state,
  accessToken: accessToken,
  loginLoading: false,
  loginError: null,
})

export const loginFailure = (state, { errorMessage }) => ({
  ...state,
  accessToken: null,
  loginLoading: false,
  loginError: errorMessage,
})

export const logoutLoading = (state) => ({
  ...state,
  loginLoading: true,
  loginError: null,
})

export const logoutSuccess = (state, { success }) => ({
  ...state,
  accessToken: null,
  logoutLoading: false,
  logoutError: null,
})

export const logoutFailure = (state, { errorMessage }) => ({
  ...state,
  accessToken: null,
  logoutLoading: false,
  logoutError: errorMessage,
})

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [LoginTypes.LOGIN_LOADING]: loginLoading,
  [LoginTypes.LOGIN_SUCCESS]: loginSuccess,
  [LoginTypes.LOGIN_FAILURE]: loginFailure,
  [LoginTypes.LOGOUT_LOADING]: logoutLoading,
  [LoginTypes.LOGOUT_SUCCESS]: logoutSuccess,
  [LoginTypes.LOGOUT_FAILURE]: logoutFailure,
})
