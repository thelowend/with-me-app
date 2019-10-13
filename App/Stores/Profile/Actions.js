import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  updateProfile: ['idToken'],
  updateProfileLoading: null,
  updateProfileSuccess: ['user'],
  updateProfileFailure: ['errorMessage'],
})

export const ProfileTypes = Types
export default Creators
