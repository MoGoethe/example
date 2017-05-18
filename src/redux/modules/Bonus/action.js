import { http } from 'utils'
import * as types from './constant'

// 根据memberId获取会员账户
export function getMemberAccount() {
  const memberInfo = JSON.parse(sessionStorage.memberInfo)

  return dispatch => {
    http
      .get('memberAccount/getMemberAccountByMemberId', { memberId: memberInfo.id })
      .then(res => {
        sessionStorage.memberAccount = JSON.stringify(res.info)
        dispatch({
          type: types.GET_MEMBER_ACCOUNT_SUCCESS,
          info: res.info,
          timeAt: Date.now()
        })
      })
      .catch(error => dispatch({
        type: types.GET_MEMBER_ACCOUNT_FAILURE,
        errMsg: error.errMsg,
        timeAt: Date.now()
      }))
  }
}

// 获取会员账户历史
export function getAccountDetail() {
  const memberInfo = JSON.parse(sessionStorage.memberInfo)

  return dispatch => {
    http
      .get('memberAccountIoDetail/query', { data: { memberId: memberInfo.id } })
      .then(res => dispatch({
        type: types.GET_ACCOUNT_DETAIL_SUCCESS,
        info: res.info,
        timeAt: Date.now()
      }))
      .catch(error => dispatch({
        type: types.GET_ACCOUNT_DETAIL_FAILURE,
        errMsg: error.errMsg,
        timeAt: Date.now()
      }))
  }
}
