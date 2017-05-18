import React, { Component, PropTypes } from 'react'
import Icon from '../Icon/Icon'
import ListItem from '../ListItem/ListItem'
import styles from './Radio.scss'

const LeftItem = ListItem.LeftItem
const RightItem = ListItem.RightItem

class RadioItem extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    label: PropTypes.string,
    name: PropTypes.string,
    ref: PropTypes.string,
    children: PropTypes.any,
    checked: PropTypes.bool,
  };

  static defaultProps = {
    onChange() {},
    getValue() {}
  };

  state = {
    value: ''
  };

  componentDidMount() {
    const { value, getValue, defaultChecked } = this.props

    this.setState({
        value: value || ''
      })
      // console.log(defaultChecked)

    if (defaultChecked) {
      getValue(value.toString())
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.value })
  }

  onChange(e) {
    this.setState({ value: e.target.value })
    this.props.onChange(e)
    this.props.getValue(e.target.value)
  }

  render() {
    const { label, name, children, defaultChecked, getValue } = this.props

    return (
      <label className={styles.radioWrapper}>
        <ListItem>
          <LeftItem>
            <span className={styles.radio}>
              <input
                type="radio"
                name={name}
                className={styles.radioInput}
                onChange={e => this.onChange(e)}
                defaultChecked={defaultChecked}
                value={this.state.value}
              />
              <span className={styles.checked}>
                <Icon icon="queren" fontSize="20px" />
              </span>
            </span>
            <span>{label}</span>
          </LeftItem>
          <RightItem>
            {children}
          </RightItem>
        </ListItem>
      </label>
    )
  }
}

export default RadioItem
