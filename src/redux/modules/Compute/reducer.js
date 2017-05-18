import * as types from './constant'

const initState = {
  tEcommItemProperty: {
    info: {
      properties: []
    },
    errMsg: '',
    timeAt: 0
  },
  calculatorPriceStatus: {
    price: undefined,
    errMsg: '',
    timeAt: 0
  },
}

export default function(state = initState, action) {
  switch (action.type) {

    case types.GET_TECOMMITEM_PROPERTY_SUCCESS:
      return {
        ...state,
        tEcommItemProperty: {
          info: action.info,
          errMsg: '',
          timeAt: action.timeAt
        }
      }

    case types.GET_TECOMMITEM_TREE_FAILURE:
      return {
        ...state,
        tEcommItemProperty: {
          info: null,
          errMsg: action.errMsg,
          timeAt: action.timeAt
        }
      }

    case types.CALCULATOR_PRICE_SUCCESS:
      return {
        ...state,
        calculatorPriceStatus: {
          price: action.price,
          errMsg: '',
          timeAt: action.timeAt
        }
      }

    case types.CALCULATOR_PRICE_FAILURE:
      return {
        ...state,
        calculatorPriceStatus: {
          price: undefined,
          errMsg: action.info,
          timeAt: action.timeAt
        }
      }

    case types.INIT_CALCULATOR_PRICE:
      return {
        ...state,
        calculatorPriceStatus: initState.calculatorPriceStatus
      }

      // case types.SAVE_CALCULATOR_PARAMS:
      //   return {
      //     ...state,
      //     calculatorParams: action.params
      //   }

    default:
      return state
  }
}
