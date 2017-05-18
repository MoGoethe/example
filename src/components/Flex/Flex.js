import React, { Component, PropTypes } from 'react'
import styles from './Flex.scss'
import FlexItem from './FlexItem'

function Flex(props) {
  const { style, justifyContent, flexDirection, flexWrap, alignItems, alignContent, className } = props
  const flexStyle = {
    display: 'flex',
    justifyContent,
    flexDirection,
    flexWrap,
    alignItems,
    alignContent
  }

  return (
    <div className={className} style={{...flexStyle, ...style}}>
      {props.children}
    </div>
  )
}

Flex.propTypes = {
  justifyContent: PropTypes.string,
  flexDirection: PropTypes.string,
  flexWrap: PropTypes.string,
  alignItems: PropTypes.string,
  alignContent: PropTypes.string,
}

Flex.Item = FlexItem

export default Flex
