import { takeLatest, all } from 'redux-saga/effects'
import { UserTypes } from '../Stores/User/Actions'
import { StartupTypes } from '../Stores/Startup/Actions'
import { AuthTypes } from '../Stores/Auth/Actions'
import { ProfileTypes } from '../Stores/Profile/Actions'
import { fetchUser } from './UserSaga'
import { updateProfile } from './ProfileSaga'
import { startup } from './StartupSaga'
import { login, logout } from './AuthSaga'

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(StartupTypes.STARTUP, startup),
    // Call `fetchUser()` when a `FETCH_USER` action is triggered
    takeLatest(UserTypes.FETCH_USER, fetchUser),

    takeLatest(ProfileTypes.UPDATE_PROFILE, updateProfile),

    takeLatest(AuthTypes.LOGIN, login),
    takeLatest(AuthTypes.LOGOUT, logout),
  ])
}
