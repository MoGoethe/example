import { http } from '../../../utils'
import * as types from './constant'

export function getTEcommItem() {
  return dispatch => {
    http
      .get('tEcommItem/query', { data: { parentId: 0 } })
      .then(res => dispatch({
        type: types.GET_TECOMMITEM_SUCCESS,
        info: res.info,
        timeAt: Date.now()
      }))
      .catch(error => dispatch({
        type: types.GET_TECOMMITEM_FAILURE,
        errMsg: error.errMsg,
        timeAt: Date.now()
      }))
  }
}

// export function getLoginStatus() {
//   return dispatch => {
//     http
//       .get('member/isLogined')
//       .then(res => dispatch({
//         type: types.GET_LOGIN_STATUS_SUCCESS,
//         isLogined: res.info,
//         timeAt: Date.now()
//       }))
//       .catch(error => dispatch({
//         type: types.GET_LOGIN_STATUS_FAILURE,
//         errMsg: error.errMsg,
//         timeAt: Date.now()
//       }))
//   }
// }

export function getVercode(mobile) {
  return dispatch => {
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
    http
      .get('vercode/checkVercode', { mobile, vercode })
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

// function re
