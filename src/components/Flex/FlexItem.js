import React, { Component, PropTypes } from 'react'
import styles from './Flex.scss'

function FlexItem(props) {
  const { className, style, flex, flexBasis, alignSelf } = props
  const flexItemStyle = {
    flex,
    flexBasis,
    alignSelf
  }

  return (
    <div className={className} style={{...flexItemStyle, ...style}}>
      {props.children}
    </div>
  )
}

FlexItem.propTypes = {
  flex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  flexBasis: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default FlexItem
