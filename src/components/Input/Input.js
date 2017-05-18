import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import styles from './Input.scss'

class Input extends Component {
  static propTypes = {
    value: PropTypes.any,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    pattern: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
  };

  static defaultProps = {
    onChange() {},
    type: 'text'
  }

  constructor(props) {
    super(props)
    this.state = {
      value: props.value || ''
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({ value: nextProps.value })
    }
  }

  onChange = (e) => {
    const value = e.target.value
    this.setState({ value })
    this.props.onChange(value)
  }

  render() {
    const { placeholder, pattern, number, type, className, style } = this.props
    const { value } = this.state

    return (
      <input
        className={classnames(styles.input, className)}
        placeholder={placeholder}
        onChange={this.onChange}
        style={style}
        pattern={number ? '\\d*' : ''}
        type={type}
        value={value}
      />
    )
  }
}

export default Input
