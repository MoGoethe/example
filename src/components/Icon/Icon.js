import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import styles from './Icon.scss'

function Icon(props) {
  const { icon, className, onTouchTap, style, fontSize, color } = props
  const classNames = classnames('iconfont ' + styles[`icon-${icon}`], className)
  const icnStyles = {
    ...style,
    fontSize,
    color
  }

  return (
    <i
      className={classNames}
      onTouchTap={onTouchTap}
      style={icnStyles}
    />
  )
}

Icon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  style: PropTypes.object,
  onTouchTap: PropTypes.func,
  size: PropTypes.number,
  color: PropTypes.string,
}

export default Icon
