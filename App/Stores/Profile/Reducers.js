import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { ProfileTypes } from './Actions'

export const updateProfileLoading = (state) => ({
  ...state,
  profileIsLoading: true,
  profileErrorMessage: null,
})

export const updateProfileSuccess = (state, { profile }) => ({
  ...state,
  profile: profile,
  profileIsLoading: false,
  profileErrorMessage: null,
})

export const updateProfileFailure = (state, { errorMessage }) => ({
  ...state,
  profile: {},
  profileIsLoading: false,
  profileErrorMessage: errorMessage,
})

export const reducer = createReducer(INITIAL_STATE, {
  [ProfileTypes.UPDATE_PROFILE_LOADING]: updateProfileLoading,
  [ProfileTypes.UPDATE_PROFILE_SUCCESS]: updateProfileSuccess,
  [ProfileTypes.UPDATE_PROFILE_FAILURE]: updateProfileFailure,
})
