import { put, call } from 'redux-saga/effects'
import UserActions from 'App/Stores/User/Actions'
import { userService } from 'App/Services/UserService'
import AuthActions from 'App/Stores/Auth/Actions'

export function* fetchUser(payload) {
  yield put(UserActions.fetchUserLoading())

  const user = yield call(userService.fetchUser, payload.idToken)
  if (!user.isAxiosError) {
    yield put(UserActions.fetchUserSuccess(user))
  } else {
    yield put(UserActions.fetchUserFailure('There was an error while fetching user information.'))
    yield call(AuthActions.logout)
  }
}