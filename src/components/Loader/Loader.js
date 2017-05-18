import React, { Component, PropTypes } from 'react'
import styles from './Loader.scss'
import logoImage from 'static/images/logo.jpg'

function Loader(props) {
  return (
    <div>
      {props.showLoading &&
        <div className={styles.mask}>
          <div className={styles.content}>
          <div className={styles.typing}></div>
          </div>
        </div>
      }
    </div>
  )
}

Loader.propTypes = {
  showLoading: PropTypes.bool
}

export default Loader
