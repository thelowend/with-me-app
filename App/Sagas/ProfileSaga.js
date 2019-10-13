import { put, call } from 'redux-saga/effects'
import ProfileActions from 'App/Stores/Profile/Actions'
import { userService } from 'App/Services/UserService'

export function* updateProfile(payload) {
  yield put(ProfileActions.updateProfileLoading())

  const res = yield call(userService.updateProfile, payload.idToken, payload.profile)
  debugger;
  if (!res.isAxiosError) {
    yield put(ProfileActions.updateProfileSuccess())
    debugger;
  } else {
    yield put(ProfileActions.updateProfileFailure())
    debugger;
  }
}
