import * as types from './constant'

const initState = {
  memberAccount: {
    info: {},
    errMsg: '',
    timeAt: 0
  },
  acountDetail: {
    info: [],
    errMsg: '',
    timeAt: 0
  }
}

export default function(state = initState, action) {
  switch (action.type) {

    case types.GET_MEMBER_ACCOUNT_SUCCESS:
      return {
        ...state,
        memberAccount: {
          info: action.info,
          errMsg: '',
          timeAt: action.timeAt
        }
      }

    case types.GET_MEMBER_ACCOUNT_FAILURE:
      return {
        ...state,
        memberAccount: {
          info: {},
          errMsg: action.errMsg,
          timeAt: action.timeAt
        }
      }

    case types.GET_ACCOUNT_DETAIL_SUCCESS:
      return {
        ...state,
        acountDetail: {
          info: action.info,
          errMsg: '',
          timeAt: action.timeAt
        }
      }

    default:
      return state
  }
}
