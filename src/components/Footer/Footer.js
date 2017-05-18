import React, { Component, PropTypes } from 'react'
import Flex from '../Flex/Flex'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'
import styles from './Footer.scss'

const FlexItem = Flex.Item

function Footer(props) {
  const { disabled, onSubmit, label, nextIcon } = props

  return (
    <Flex className={styles.footer}>
      <FlexItem flex={1}>
        <a href="tel:4009939308" className={styles.button}>
          <Icon icon="linedesign-20-copy" fontSize="40px" />
          <p>咨询客服</p>
        </a>
      </FlexItem>
      <FlexItem flex={2}>
        <Button
          block={true}
          type="primary"
          disabled={disabled}
          onTouchTap={e => onSubmit(e)}
          height={100}
          style={{borderRadius: 0}}
        >
          {label}
          {nextIcon &&
            <Icon
              icon="xiayibu_jiantou"
              fontSize="20px"
              style={{marginLeft: 10}}
            />
          }
        </Button>
      </FlexItem>
    </Flex>
  )
}

Footer.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  nextIcon: PropTypes.bool,
  onSubmit: PropTypes.func,
}

Footer.defaultProps = {
  onSubmit() {},
  nextIcon: true
}

export default Footer
