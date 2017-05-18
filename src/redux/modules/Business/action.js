import { http } from 'utils'
import * as types from './constant'

export function getTEcommItemTree(id) {
  return dispatch => {
    http
      .get('tEcommItem/getTEcommItemTree', { id })
      .then(res => dispatch({
        type: types.GET_TECOMMITEM_TREE_SUCCESS,
        info: res.info,
        timeAt: Date.now()
      }))
      .catch(error => dispatch({
        type: types.GET_TECOMMITEM_TREE_FAILURE,
        errMsg: error.errMsg,
        timeAt: Date.now()
      }))
  }
}
