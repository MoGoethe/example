import { http, Cookie } from 'utils'

function getToken() {
  return !!Cookie.get('token')
}

function logout(cb) {
  Cookie.remove('token')
  if (cb) cb()
}

export default {
  getToken,
  logout
}
