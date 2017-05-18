import { http } from '../../../utils'
import * as types from './constant'

export function getTEcommitemProperty(id) {
  return dispatch => {
    http
      .get('tEcommItem/getTEcommItemPropertyValues', { id })
      .then(res => dispatch({
        type: types.GET_TECOMMITEM_PROPERTY_SUCCESS,
        info: res.info,
        timeAt: Date.now()
      }))
      .catch(error => dispatch({
        type: types.GET_TECOMMITEM_PROPERTY_FAILURE,
        errMsg: error.errMsg,
        timeAt: Date.now()
      }))
  }
}

export function calculatorPrice(params, itemName) {
  return dispatch => {
    http
      .post('tEcommPriceCalculatorRule/calculator', params)
      .then(res => {
        const price = parseInt(res.info, 10).toFixed(2)
        // 存入sessionStorage
        sessionStorage.calcParams = JSON.stringify({...params, price, itemName})

        dispatch({
          type: types.CALCULATOR_PRICE_SUCCESS,
          price,
          timeAt: Date.now()
        })
      })
      .catch(error => dispatch({
        type: types.CALCULATOR_PRICE_FAILURE,
        errMsg: error.errMsg,
        timeAt: Date.now()
      }))
  }
}

export function initCalculatorPrice() {
  return {
    type: types.INIT_CALCULATOR_PRICE
  }
}
