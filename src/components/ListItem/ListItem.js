import React, { Component, PropTypes } from 'react'
import Flex from '../Flex/Flex'
import styles from './ListItem.scss'

const FlexItem = Flex.Item

function ListItem(props) {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      className={styles.ListItem}
      style={props.style}
    >
      {props.children}
    </Flex>
  )
}

function LeftItem(props) {
  return (
    <FlexItem className={styles.leftItem} flex={props.flex}>
      {props.children}
    </FlexItem>
  )
}

function RightItem(props) {
  return (
    <FlexItem className={styles.rightItem} flex={props.flex}>
      {props.children}
    </FlexItem>
  )
}

ListItem.LeftItem = LeftItem
ListItem.RightItem = RightItem

ListItem.propTypes = {
  children: PropTypes.node
}

LeftItem.propTypes = {
  children: PropTypes.any
}

RightItem.propTypes = {
  children: PropTypes.any
}

export default ListItem
