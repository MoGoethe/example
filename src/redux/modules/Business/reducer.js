import * as types from './constant'

const initState = {
  tEcommItemTree: {
    info: {
      nodes: []
    },
    errMsg: '',
    timeAt: 0
  }
}

export default function(state = initState, action) {
  switch (action.type) {

    case types.GET_TECOMMITEM_TREE_SUCCESS:
      return {
        ...state,
        tEcommItemTree: {
          info: action.info,
          errMsg: '',
          timeAt: action.timeAt
        }
      }

    case types.GET_TECOMMITEM_TREE_FAILURE:
      return {
        ...state,
        tEcommItemTree: {
          info: [],
          errMsg: action.errMsg,
          timeAt: action.timeAt
        }
      }

    default:
      return state
  }
}
