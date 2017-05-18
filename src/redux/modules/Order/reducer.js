import * as types from './constant'

const initState = {
  orderInfo: {
    info: [],
    errMsg: '',
    timeAt: 0
  }
}

export default function(state = initState, action) {
  switch (action.type) {

    case types.GET_ORDER_SUCCESS:
      return {
        ...state,
        orderInfo: {
          info: action.info,
          errMsg: '',
          timeAt: action.timeAt
        }
      }

    case types.GET_ORDER_FAILURE:
      return {
        ...state,
        orderInfo: {
          info: [],
          errMsg: action.errMsg,
          timeAt: action.timeAt
        }
      }

    default:
      return state
  }
}
