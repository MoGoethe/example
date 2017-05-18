import { http } from 'utils'
import * as types from './constant'

// 获取会员最近添加的银行账户信息
export function getLastMemberAccount() {
  const memberAccount = JSON.parse(sessionStorage.memberAccount)

  return dispatch => {
    http
      .get('memberBankAccount/query', { data: { memberAccountId: memberAccount.id } })
      .then(res => dispatch({
        type: types.GET_LAST_MEMBER_ACCOUNT_SUCCESS,
        info: res.info[0],
        timeAt: Date.now()
      }))
      .catch(error => dispatch({
        type: types.GET_LAST_MEMBER_ACCOUNT_FAILURE,
        errMsg: error.errMsg,
        timeAt: Date.now()
      }))
  }
}

// 获取银行配置信息
export function getBank() {
  return dispatch => {
    http
      .get('bank/query')
      .then(res => dispatch({
        type: types.GET_BANK_SUCCESS,
        info: res.info,
        timeAt: Date.now()
      }))
      .catch(error => dispatch({
        type: types.GET_BANK_FAILURE,
        errMsg: error.errMsg,
        timeAt: Date.now()
      }))
  }
}

// 提现支出
export function expenditure(amount, memberBankAccountId) {
  const memberInfo = JSON.parse(sessionStorage.memberInfo)
  const memberAccount = JSON.parse(sessionStorage.memberAccount)

  return dispatch => {
    dispatch({ type: types.REQUEST_EXPENDITURE })

    http
      .put('memberAccount/expenditure', {
        memberId: memberInfo.id,
        amount, // 提现金额
        memberBankAccountId: memberBankAccountId, // 用户银行账户ID
        type: '10', // 这个参数暂时固定为10
        openid: memberInfo.openid
      })
      .then(res => dispatch({
        type: types.EXPENDITURE_SUCCESS,
        info: res.info,
        timeAt: Date.now()
      }))
      .catch(error => dispatch({
        type: types.EXPENDITURE_FAILURE,
        errMsg: error.errMsg,
        timeAt: Date.now()
      }))
  }
}

// 添加账户并提现
export function createAndExpenditure(payload, amount) {
  const memberInfo = JSON.parse(sessionStorage.memberInfo)
  const cPayload = {...payload }
  if (cPayload.hasOwnProperty('amount')) {
    delete cPayload.amount
  }

  return dispatch => {
    dispatch({ type: types.REQUEST_EXPENDITURE })

    http
      .post('memberBankAccount/create', { data: cPayload })
      .then(res => {
        http
          .put('memberAccount/expenditure', {
            memberId: memberInfo.id,
            amount,
            memberBankAccountId: res.info,
            type: '10',
            openid: memberInfo.openid
          })
          .then(res => dispatch({
            type: types.EXPENDITURE_SUCCESS,
            info: res.info,
            timeAt: Date.now()
          }))
          .catch(error => dispatch({
            type: types.EXPENDITURE_FAILURE,
            errMsg: error.errMsg,
            timeAt: Date.now()
          }))
      })
      .catch(error => dispatch({
        type: types.EXPENDITURE_FAILURE,
        errMsg: error.errMsg,
        timeAt: Date.now()
      }))
  }
}
