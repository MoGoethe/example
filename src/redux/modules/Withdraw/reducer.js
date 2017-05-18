import * as types from './constant'

const initState = {
  bankInfo: [],
  createAcountStatus: {
    info: {},
    errMsg: '',
    timeAt: 0
  },
  lastMemberAcount: {
    info: {},
    errMsg: '',
    timeAt: 0
  },
  expenditureStatus: {
    isSuccess: false,
    errMsg: '',
    timeAt: 0
  },
  showLoading: false
}

export default function(state = initState, action) {
  switch (action.type) {

    case types.REQUEST_EXPENDITURE:
      return {
        ...state,
        showLoading: true
      }

    case types.GET_BANK_SUCCESS:
      return {
        ...state,
        bankInfo: action.info
      }

    case types.GET_LAST_MEMBER_ACCOUNT_SUCCESS:
      return {
        ...state,
        lastMemberAcount: {
          info: action.info,
          errMsg: '',
          timeAt: action.timeAt
        }
      }

    case types.GET_LAST_MEMBER_ACCOUNT_FAILURE:
      return {
        ...state,
        lastMemberAcount: {
          info: {},
          errMsg: action.errMsg,
          timeAt: action.timeAt
        }
      }

    case types.CREATE_MEMBER_ACCOUNT_SUCCESS:
      return {
        ...state,
        createAcountStatus: {
          info: action.info,
          errMsg: '',
          timeAt: action.timeAt
        }
      }

    case types.EXPENDITURE_SUCCESS:
      return {
        ...state,
        expenditureStatus: {
          isSuccess: true,
          errMsg: '',
          timeAt: action.timeAt
        },
        showLoading: false
      }

    case types.EXPENDITURE_FAILURE:
      return {
        ...state,
        expenditureStatus: {
          isSuccess: false,
          errMsg: action.errMsg,
          timeAt: action.timeAt
        },
        showLoading: false
      }

    default:
      return state
  }
}
