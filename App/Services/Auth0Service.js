import { Config } from 'App/Config'
import Auth0 from 'react-native-auth0'

const auth0 = new Auth0(Config.Auth0)

function login() {
  auth0.webAuth
    .authorize({
      scope: 'openid profile',
      audience: 'https://' + Config.Auth0.domain + '/userinfo',
    })
    .then((credentials) => {
      console.log(credentials)
      return credentials.accessToken
    })
    .catch((error) => {
      console.log('Log in error: ', error)
      return error
    })
}

function logout() {
  auth0.webAuth
    .clearSession({})
    .then((success) => {
      console.log('Log out successful: ', success)
      return null
    })
    .catch((error) => {
      console.log('Log out cancelled: ', error)
      return error
    })
}

export const auth0Service = {
  login,
  logout,
}
