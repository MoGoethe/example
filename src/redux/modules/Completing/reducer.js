import * as types from './constant'

const initState = {
  createOrderStatus: {
    orderNum: '',
    timeAt: 0,
    errMsg: ''
  },
  getConfirmCodeStatus: {
    isSendcode: false,
    timeAt: 0,
    errMsg: ''
  },
  showLoading: false
}

export default function(state = initState, action) {
  switch (action.type) {

    case types.REQUEST_CREATE_ORDER:
      return {
        ...state,
        showLoading: true
      }

    case types.CREATE_ORDER_SUCCESS:
      return {
        ...state,
        createOrderStatus: {
          orderNum: action.info.orderNum,
          errMsg: '',
          timeAt: action.timeAt
        },
        showLoading: false
      }
    case types.CREATE_ORDER_FAILURE:
      return {
        ...state,
        createOrderStatus: {
          orderNum: '',
          errMsg: action.errMsg,
          timeAt: action.timeAt
        },
        showLoading: false
      }

    case types.GET_CONFIRM_CODE_SUCCESS:
      return {
        ...state,
        getConfirmCodeStatus: {
          isSendcode: action.info,
          errMsg: '',
          timeAt: action.timeAt
        }
      }

    case types.GET_CONFIRM_CODE_FAILURE:
      return {
        ...state,
        getConfirmCodeStatus: {
          isSendcode: false,
          errMsg: action.errMsg,
          timeAt: action.timeAt
        }
      }

    default:
      return state
  }
}
