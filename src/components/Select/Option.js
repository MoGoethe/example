import React, { Component, PropTypes } from 'react'

function Option(props) {
  const { value, children } = props

  return (
    <option value={value}>
      {children}
    </option>
  )
}

Option.propTypes = {
  value: PropTypes.any,
  children: PropTypes.any
}

export default Option
