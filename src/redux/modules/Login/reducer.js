import * as types from './constant'

const initState = {
  getVercodeStatus: {
    isGetVercode: false,
    errMsg: '',
    timeAt: 0,
    loading: false
  },
  checkVercodeStatus: {
    vercodeIsCorrect: false,
    errMsg: '',
    timeAt: 0
  },
  memberInfo: {
    info: null,
    errMsg: '',
    timeAt: 0
  },
  loginStatus: {
    isLogined: false,
    errMsg: '',
    timeAt: 0,
  },
  showLoading: false,
}

export default function(state = initState, action) {
  switch (action.type) {

    case types.REQUEST_VERCODE:
      return {
        ...state,
        showLoading: true
      }

    case types.GET_VERCODE_SUCCESS:
      return {
        ...state,
        getVercodeStatus: {
          isGetVercode: action.isGetVercode,
          errMsg: '',
          timeAt: action.timeAt,
        },
        showLoading: false
      }

    case types.GET_VERCODE_FAILURE:
      return {
        ...state,
        getVercodeStatus: {
          isGetVercode: false,
          errMsg: action.errMsg,
          timeAt: action.timeAt,
        },
        showLoading: false
      }

    case types.REQUEST_CHECK_VERCODE:
      return {
        ...state,
        showLoading: true
      }

    case types.CHECK_VERCODE_SUCCESS:
      return {
        ...state,
        checkVercodeStatus: {
          vercodeIsCorrect: true,
          errMsg: '',
          timeAt: action.timeAt
        },
        showLoading: false
      }

    case types.CHECK_VERCODE_FAILURE:
      return {
        ...state,
        checkVercodeStatus: {
          vercodeIsCorrect: false,
          errMsg: '请输入正确的验证码',
          timeAt: action.timeAt
        },
        showLoading: false
      }

    case types.GET_MEMBER_INFO_SUCCESS:
      return {
        ...state,
        memberInfo: {
          info: action.info,
          timeAt: action.timeAt,
          errMsg: ''
        }
      }

    case types.GET_MEMBER_INFO_FAILURE:
      return {
        ...state,
        memberInfo: {
          info: null,
          timeAt: action.timeAt,
          errMsg: action.errMsg
        }
      }

    case types.GET_LOGIN_STATUS_SUCCESS:
      return {
        ...state,
        loginStatus: {
          isLogined: action.isLogined,
          errMsg: '',
          timeAt: action.timeAt
        }
      }

    default:
      return state
  }
}
