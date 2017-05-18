import React, { Component, PropTypes } from 'react'
import { Flex } from 'components'
import styles from './Topbar.scss'

const FlexItem = Flex.Item

function Topbar(props) {
  const { label, price } = props

  return (
    <Flex className={styles.topbar} alignItems="center" justifyContent="space-between">
      <FlexItem flex={50}>
        <span className={styles.label}>{label}：</span>
      </FlexItem>
      <FlexItem flex={50} className="text-right">
        { price ?
          <span className={styles.price}><span>¥</span>{price}</span> :
          <span className={styles.pending}>待定</span>
        }
      </FlexItem>
    </Flex>
  )
}

export default Topbar
