import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  updateUserValue: ['user'],
  fetchUser: ['idToken'],
  fetchUserLoading: null,
  fetchUserSuccess: ['user'],
  fetchUserFailure: ['errorMessage'],
  syncWithFb: ['id', 'fbId'],
  syncWithFbLoading: null,
  syncWithFbSuccess: ['user'],
  syncWithFbFailure: ['errorMessage'],
  sendSocialMediaPost: ['id', 'target', 'post'],
})

export const UserTypes = Types
export default Creators
