import { put, call } from 'redux-saga/effects'
import ProfileActions from '../Stores/Profile/Actions'
import { userService } from '../Services/UserService'

export function* updateProfile(payload) {
  yield put(ProfileActions.updateProfileLoading())
  const res = yield call(userService.updateProfile, payload)
  if (!res.isAxiosError) {
    yield put(ProfileActions.updateProfileSuccess())
  } else {
    yield put(ProfileActions.updateProfileFailure())
  }
}
