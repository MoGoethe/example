import 'isomorphic-fetch'
import { browserHistory } from 'react-router'
import { Cookie } from 'utils'

function getUrl(path, query) {
  if (path.startsWith('http')) {
    return path
  }

  // const server = 'http://localhost:3000/'
  const server = 'http://119.29.19.250:3000/'
  // const server = 'http://123.207.26.15:3000/'
  return server + path + serialiseObject(query)
}

function serialiseObject(obj) {
  if (obj && Object.keys(obj).length) {
    return '?' + Object.keys(obj).map(key =>
      key + '=' + encodeURIComponent(
        typeof obj[key] === 'object' ? JSON.stringify(obj[key]) : obj[key]
      )
    ).join('&')
  }

  return ''
}

function getHeaders() {
  let headersConfig = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

  if (Cookie.get('token')) {
    headersConfig.Authorization = Cookie.get('token')
  }

  return headersConfig
}

function checkStatus(res) {
  if (res.status >= 200 && res.status < 300) {
    return res
  }

  if (res.status === 401) {
    browserHistory.replace('/login')
    return false
  }

  const error = new Error(res.statusText)
  error.errMsg = res
  throw error
}

function jsonParse(res) {
  return res.json()
}

// 检查返回的数据
function checkDataStatus(json) {
  if (json.status === 200) {
    return json
  }

  const error = new Error(json.errMsg)
  error.errMsg = json.errMsg
  throw error
}

const http = {
  get: (path, query) => new Promise((resolve, reject) => {
    fetch(getUrl(path, query), {
        method: 'GET',
        headers: getHeaders()
      })
      .then(checkStatus)
      .then(jsonParse)
      .then(checkDataStatus)
      .then(res => resolve(res))
      .catch(err => reject(err))
  }),

  post: (path, payload) => new Promise((resolve, reject) => {
    fetch(getUrl(path), {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(payload)
      })
      .then(checkStatus)
      .then(jsonParse)
      .then(checkDataStatus)
      .then(res => resolve(res))
      .catch(err => reject(err))
  }),

  put: (path, payload) => new Promise((resolve, reject) => {
    fetch(getUrl(path), {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify(payload)
      })
      .then(checkStatus)
      .then(jsonParse)
      .then(checkDataStatus)
      .then(res => resolve(res))
      .catch(err => reject(err))
  }),

  delete: (path, query) => new Promise((resolve, reject) => {
    fetch(getUrl(path, query), {
        method: 'DELETE',
        headers: getHeaders()
      })
      .then(checkStatus)
      .then(jsonParse)
      .then(checkDataStatus)
      .then(res => resolve(res))
      .catch(err => reject(err))
  })

}

export default http
