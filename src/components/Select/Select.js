import React, { Component, PropTypes } from 'react'
import Icon from '../Icon/Icon'
import styles from './Select.scss'
import Option from './Option'

class Select extends Component {
  static propTypes = {
    value: PropTypes.any,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    warpperStyle: PropTypes.object,
    style: PropTypes.object
  };

  static defaultProps = {
    onChange() {}
  }

  static Option = Option;

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
    const { children, placeholder, warpperStyle, style } = this.props

    return (
      <div className={styles.selectWrapper} style={warpperStyle}>
        <select
          className={styles.select}
          onChange={this.onChange}
          value={this.state.value}
          style ={style}
        >
          <option value="" disabled hidden>{placeholder}</option>
            {children}
        </select>
        <Icon icon="xiayibu_jiantou" color="#ccc" fontSize="20px" />
      </div>
    )
  }
}

export default Select
