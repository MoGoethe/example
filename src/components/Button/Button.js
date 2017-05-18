import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'
import classnames from 'classnames'
import styles from './Button.scss'

function Button(props) {
  const {
    onTouchTap,
    className,
    disabled,
    block,
    width,
    height,
    style,
    type,
    backgroundColor,
    to
  } = props

  const btnStyle = {...style, backgroundColor, color: backgroundColor && '#fff' }

  if (width) {
    btnStyle.width = width + 'px'
  }

  if (height) {
    btnStyle.height = height + 'px'
  }

  function onTouchTapHandler(e) {
    e.preventDefault()

    if (to) {
      if (typeof to === 'string') {
        browserHistory.push(to)
      } else {
        browserHistory.push({
          pathname: to.pathname,
          query: to.query,
          state: to.state
        })
      }
    }

    onTouchTap(e)
  }

  return (
    <button
      className = {
        classnames({
          [styles.button]: true,
          [styles.disabled]: disabled,
          [styles.block]: block,
          [styles.primary]: type === 'primary',
          [styles.ghost]: type === 'ghost',
          [className]: !!className,
        })
      }
      onTouchTap = { e => onTouchTapHandler(e) }
      style = { btnStyle } > { props.children }
    </button>
  )
}

Button.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  style: PropTypes.object,
  onTouchTap: PropTypes.func,
  block: PropTypes.bool,
}

Button.defaultProps = {
  onTouchTap() {},
}

export default Button
