import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { browserHistory, Router } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { configureStore } from './redux/store/configureStore'
import './utils/titleDecorator'
import Routes from './routes'
import './styles/main.scss'

injectTapEventPlugin()

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Routes history={browserHistory} />
  </Provider>,
  document.getElementById('root')
)
