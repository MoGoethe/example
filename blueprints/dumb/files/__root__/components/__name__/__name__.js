import React, { Component, PropTypes } from 'react'
import styles from './<%= pascalEntityName %>.scss'

function <%= pascalEntityName %> (props) {
  return (
    <div className={styles.normal}>
      Component: <%= pascalEntityName %>
    </div>
  )
}

export default <%= pascalEntityName %>
