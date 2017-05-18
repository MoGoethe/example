import * as types from './constant'
import { http } from 'utils'

export function getOrder() {
  const memberInfo = JSON.parse(sessionStorage.memberInfo)
  return dispatch => {
    http
      .get('tEcommOrder/query', { data: { memberId: memberInfo.id } })
      .then(res => dispatch({
        type: types.GET_ORDER_SUCCESS,
        info: res.info,
        timeAt: Date.now()
      }))
      .catch(error => dispatch({
        type: types.GET_ORDER_FAILURE,
        errMsg: error.errMsg,
        timeAt: Date.now()
      }))
  }
}
