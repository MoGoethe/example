import * as types from './constant'
import { http, Cookie } from 'utils'

export function getLoginStatus() {
  return dispatch => {
    http
      .get('member/isLogined')
      .then(res => {
        dispatch({
          type: types.GET_LOGIN_STATUS_SUCCESS,
          isLogined: res.info,
          timeAt: Date.now()
        })
      })
      .catch(error => dispatch({
        type: types.GET_LOGIN_STATUS_FAILURE,
        errMsg: error.errMsg,
        timeAt: Date.now()
      }))
  }
}

export function getVercode(mobile) {
  return dispatch => {
    // dispatch({ type: types.REQUEST_VERCODE })

    http
      .get('vercode/getVercode', { mobile })
      .then(res => dispatch({
        type: types.GET_VERCODE_SUCCESS,
        isGetVercode: res.info,
        timeAt: Date.now()
      }))
      .catch(error => dispatch({
        type: types.GET_VERCODE_FAILURE,
        errMsg: error.errMsg,
        timeAt: Date.now()
      }))
  }
}

export function checkVercode(mobile, vercode) {
  return dispatch => {
    dispatch({ type: types.REQUEST_CHECK_VERCODE })
    http
      .get('vercode/checkVercode', { mobile, vercode })
      .then(res => {
        register(mobile)
        dispatch({
          type: types.CHECK_VERCODE_SUCCESS,
          timeAt: Date.now()
        })
      })
      .catch(error => dispatch({
        type: types.CHECK_VERCODE_FAILURE,
        errMsg: error.errMsg,
        timeAt: Date.now(),
      }))
  }
}

function register(mobile) {
  http
    .post('member/regist', { mobile })
    .then(res => {
      Cookie.set('token', res.info)
    })
}

export function getMemberInfo() {
  return dispatch => {
    http
      .get('member/info')
      .then(res => {
        sessionStorage.memberInfo = JSON.stringify(res.info)
        dispatch({
          type: types.GET_MEMBER_INFO_SUCCESS,
          info: res.info,
          timeAt: Date.now()
        })
      })
      .catch(error => dispatch({
        type: types.GET_MEMBER_INFO_FAILURE,
        errMsg: error.errMsg,
        timeAt: Date.now()
      }))
  }
}
