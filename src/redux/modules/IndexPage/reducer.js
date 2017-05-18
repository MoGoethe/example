import * as types from './constant'

const initState = {
  tEcommItem: {
    info: [],
    errMsg: '',
    timeAt: 0
  },
  // loginStatus: {
  //   isLogined: false,
  //   errMsg: '',
  //   timeAt: 0
  // },
  getVercodeStatus: {
    isGetVercode: false,
    errMsg: '',
    timeAt: 0
  }
}

export default function(state = initState, action) {
  switch (action.type) {

    case types.GET_TECOMMITEM_SUCCESS:
      return {
        ...state,
        tEcommItem: {
          info: action.info,
          errMsg: '',
          timeAt: action.timeAt
        }
      }

    case types.GET_VERCODE_FAILURE:
      return {
        ...state,
        tEcommItem: {
          info: [],
          errMsg: action.errMsg,
          timeAt: action.timeAt
        }
      }

      // case types.GET_LOGIN_STATUS_SUCCESS:
      //   return {
      //     ...state,
      //     loginStatus: {
      //       isLogined: action.isLogined,
      //       errMsg: '',
      //       timeAt: action.timeAt
      //     }
      //   }

      case types.GET_VERCODE_SUCCESS:
        return {
          ...state,
          getVercodeStatus: {
            isGetVercode: action.isGetVercode,
            errMsg: '',
            timeAt: action.timeAt
          }
        }

      case types.GET_VERCODE_FAILURE:
        return {
          ...state,
          getVercodeStatus: {
            isGetVercode: false,
            errMsg: action.errMsg,
            timeAt: action.timeAt
          }
        }

    default:
      return state
  }
}
