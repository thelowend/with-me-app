import { put, call } from 'redux-saga/effects'
import ProfileActions from 'App/Stores/Profile/Actions'
import { userService } from 'App/Services/UserService'

export function* updateProfile(payload) {
  yield put(ProfileActions.updateProfileLoading())

  const res = yield call(userService.updateProfile, payload.idToken, payload.profile)
  if (!res.isAxiosError) {
    yield put(ProfileActions.updateProfileSuccess())
  } else {
    yield put(ProfileActions.updateProfileFailure())
  }
}
