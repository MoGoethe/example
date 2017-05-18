import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import styles from './Card.scss'

function Card(props) {
  const { width, className, style } = props
  const cardStyle = {
    width: width + 'px'
  }
  const cardClassnames = classnames(styles.card, className)

  return (
    <div className={cardClassnames} style={{...cardStyle, ...style}}>
      {props.children}
    </div>
  )
}

Card.propTypes = {
  width: PropTypes.number,
  className: PropTypes.string
}

export default Card
