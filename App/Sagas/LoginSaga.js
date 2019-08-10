import { put, call } from 'redux-saga/effects'
import LoginActions from 'App/Stores/Login/Actions'
import { auth0Service } from 'App/Services/Auth0Service'

/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch fake user informations.
 * Feel free to remove it.
 */
export function* login() {
  yield put(LoginActions.loginLoading())

  const accessToken = yield call(auth0Service.login)
  if (accessToken) {
    yield put(LoginActions.loginSuccess(accessToken))
  } else {
    yield put(LoginActions.loginFailure('There was an error while fetching user informations.'))
  }
}

export function* logout() {
  yield put(LoginActions.logoutLoading())

  const user = yield call(auth0Service.login)
  if (user) {
    yield put(LoginActions.logoutSuccess(user))
  } else {
    yield put(LoginActions.logoutFailure('There was an error while fetching user informations.'))
  }
}
