import { combineReducers } from 'redux'
import indexPage from './IndexPage/reducer'
import business from './Business/reducer'
import compute from './Compute/reducer'
import login from './Login/reducer'
import completing from './Completing/reducer'
import order from './Order/reducer'
import bonus from './Bonus/reducer'
import withdraw from './Withdraw/reducer'

const rootReducer = combineReducers({
  indexPage,
  business,
  compute,
  login,
  completing,
  order,
  bonus,
  withdraw,
})

export default rootReducer
