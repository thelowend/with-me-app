import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  updateProfile: ['id', 'profile'],
  updateProfileLoading: null,
  updateProfileSuccess: ['profile'],
  updateProfileFailure: ['errorMessage'],
})

export const ProfileTypes = Types
export default Creators
