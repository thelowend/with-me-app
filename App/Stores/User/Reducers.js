import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { UserTypes } from './Actions'

export const updateUserValue = (state, { user }) => ({
  ...state,
  user: user,
})

export const fetchUserLoading = (state) => ({
  ...state,
  userIsLoading: true,
  userErrorMessage: null,
})

export const fetchUserSuccess = (state, { user }) => ({
  ...state,
  user: user,
  userIsLoading: false,
  userErrorMessage: null,
})

export const fetchUserFailure = (state, { errorMessage }) => ({
  ...state,
  user: {},
  userIsLoading: false,
  userErrorMessage: errorMessage,
})

export const syncWithFbLoading = (state) => ({
  ...state,
  syncIsLoading: true,
})

export const syncWithFbSuccess = (state, { user }) => ({
  ...state,
  user: user,
  syncIsLoading: false,
  syncErrorMessage: null,
})
export const syncWithFbFailure = (state, { errorMessage }) => ({
  ...state,
  syncIsLoading: false,
  syncErrorMessage: errorMessage,
})

export const reducer = createReducer(INITIAL_STATE, {
  [UserTypes.UPDATE_USER_VALUE]: updateUserValue,
  [UserTypes.FETCH_USER_LOADING]: fetchUserLoading,
  [UserTypes.FETCH_USER_SUCCESS]: fetchUserSuccess,
  [UserTypes.FETCH_USER_FAILURE]: fetchUserFailure,
  [UserTypes.SYNC_WITH_FB_LOADING]: syncWithFbLoading,
  [UserTypes.SYNC_WITH_FB_SUCCESS]: syncWithFbSuccess,
  [UserTypes.SYNC_WITH_FB_FAILURE]: syncWithFbFailure,
})
