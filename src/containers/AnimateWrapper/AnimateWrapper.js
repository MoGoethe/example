import React, { Component, PropTypes } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import styles from './AnimateWrapper.scss'

function AnimateWrapper(props) {
  return (
    <div className="app">
      <ReactCSSTransitionGroup
        component="div"
        className="transition-wrapper"
        transitionName="animateWrapper"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}>
        {React.cloneElement(props.children, {
          key: props.location.pathname
        })}
      </ReactCSSTransitionGroup>
    </div>
  )
}

export default AnimateWrapper

