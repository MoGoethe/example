import React, { PropTypes } from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import { http } from 'utils'
import { auth } from './utils'

import {
  IndexPage,
  Business,
  Withdraw,
  Compute,
  Completing,
  Login,
  Result,
  Order,
  OtherItem,
  Bonus,
  AnimateWrapper,
  Faq
} from './containers'

const Routes = ({ history }) =>
  <Router history={history}>
    <Route path="/" component={IndexPage} />
    <Route path="/indexPage" component={IndexPage} />
    <Route path="business/:itemId" component={Business} />
    <Route path="compute/:itemId/:propertyId" component={Compute} onEnter={requireAuth} />
    <Route path="completing" component={Completing} onEnter={requireAuth} />
    <Route path="withdraw" component={Withdraw} onEnter={requireAuth} />
    <Route path="login" component={Login} />
    <Route path="result" component={Result} onEnter={requireAuth} />
    <Route path="order" component={Order} onEnter={requireAuth} />
    <Route path="otherItem" component={OtherItem} />
    <Route path="bonus" component={Bonus} onEnter={requireAuth} />
    <Route path="faq" component={Faq} />
  </Router>

function requireAuth(nextState, replace, callback) {
  // cookie中无token直接跳转到login
  if (!auth.getToken()) {
    redirectLogin(nextState, replace, callback)
    return
  }

  // cookie中有token则验证是否过期
  http
    .get('member/isLogined')
    .then(res => {
      // 如果未过期，则获取memberInfo并写入到sesstionStorage
      if (res.info) {

        // 如果未缓存memberInfo则获取数据并缓存
        if (!sessionStorage.memberInfo) {
          http
            .get('member/info')
            .then(member_res => {
              sessionStorage.memberInfo = JSON.stringify(member_res.info)
              callback()
            })
        } else {
          // 已登录且缓存了memberInfo，不作处理
          callback()
        }

      } else {
        // token过期
        delete sessionStorage.memberInfo
        auth.logout()
        redirectLogin(nextState, replace, callback)
      }
    })
}

function redirectLogin(nextState, replace, callback) {
  delete sessionStorage.memberInfo
  replace({
    pathname: '/login',
    state: { nextPathname: nextState.location.pathname }
  })
  callback()
}

Routes.propTypes = {
  history: PropTypes.any
}

export default Routes
