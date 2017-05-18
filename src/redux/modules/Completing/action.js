import { http } from 'utils'
import * as types from './constant'

export function getConfirmCode(params) {
  return dispatch => {
    http
      .get('vercode/getConfirmCode', params)
      .then(res => dispatch({
        type: types.GET_CONFIRM_CODE_SUCCESS,
        info: res.info,
        timeAt: Date.now()
      }))
      .catch(error => dispatch({
        type: types.GET_CONFIRM_CODE_FAILURE,
        errMsg: error.errMsg,
        timeAt: Date.now()
      }))
  }
}

export function createOrder(params) {
  const memberInfo = JSON.parse(sessionStorage.memberInfo)
  return dispatch => {
    dispatch({ type: types.REQUEST_CREATE_ORDER })

    http
      .post('tEcommOrder/createOrder', { ...params, openid: memberInfo.openid })
      .then(res => dispatch({
        type: types.CREATE_ORDER_SUCCESS,
        info: res.info,
        timeAt: Date.now()
      }))
      .catch(error => dispatch({
        type: types.CREATE_ORDER_FAILURE,
        errMsg: error.errMsg,
        timeAt: Date.now()
      }))
  }
}
