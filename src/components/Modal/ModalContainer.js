import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import styles from './modal.scss'

export function ModalContent(props) {
  return (
    <div className={classnames(styles.content, props.className)}>
      {props.children}
    </div>
  )
}

export function ModalActions(props) {
  return (
    <div className={classnames(styles.actions, props.className)}>
      {props.children}
    </div>
  )
}
