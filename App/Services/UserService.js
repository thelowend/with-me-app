import axios from 'axios'
import { Config } from 'App/Config'
import { is, curryN, gte } from 'ramda'
import jwt from 'jwt-decode'

axios.defaults.withCredentials = true

const isWithin = curryN(3, (min, max, value) => {
  const isNumber = is(Number)
  return isNumber(min) && isNumber(max) && isNumber(value) && gte(value, min) && gte(max, value)
})
const in200s = isWithin(200, 299)

const userApiClient = axios.create({
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
})

function fetchUser(idToken) {
  const id = jwt(idToken).sub.split('|')[1]
  return userApiClient
    .get(`user/${id}`)
    .then((response) => {
      if (in200s(response.status)) {
        console.log('User: ', response.data)
        return response.data
      }
      return null
    })
    .catch((error) => {
      return error
    })
}

function updateProfile(idToken, profile) {
  const id = jwt(idToken).sub.split('|')[1]
  return userApiClient
    .put(`user/${id}`)
    .then((response) => {
      if (in200s(response.status)) {
        console.log('User: ', response.data)
        return response.data
      }
      return null
    })
    .catch((error) => {
      return error
    })
}

export const userService = {
  fetchUser,
  updateProfile,
}
