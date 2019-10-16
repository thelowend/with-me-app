import { takeLatest, all } from 'redux-saga/effects'
import { UserTypes } from '../Stores/User/Actions'
import { StartupTypes } from '../Stores/Startup/Actions'
import { AuthTypes } from '../Stores/Auth/Actions'
import { ProfileTypes } from '../Stores/Profile/Actions'
import { EvaluationTypes } from '../Stores/Evaluation/Actions'
import { fetchUser, updateUserValue } from './UserSaga'
import { fetchTest, sendEvaluation } from './EvaluationSaga'
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

    takeLatest(UserTypes.UPDATE_USER_VALUE, updateUserValue),

    takeLatest(EvaluationTypes.FETCH_TEST, fetchTest),
    takeLatest(EvaluationTypes.SEND_EVALUATION, sendEvaluation),

    takeLatest(ProfileTypes.UPDATE_PROFILE, updateProfile),

    takeLatest(ProfileTypes.UPDATE_PROFILE, updateProfile),

    takeLatest(AuthTypes.LOGIN, login),
    takeLatest(AuthTypes.LOGOUT, logout),
  ])
}
