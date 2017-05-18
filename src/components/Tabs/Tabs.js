import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import TabPanel from './TabPanel'
import styles from './Tabs.scss'

class Tabs extends Component {
  static propTypes = {
    onChange: PropTypes.func
  };

  static defaultProps = {
    onChange() {},
  }

  static TabPanel = TabPanel;

  state = {
    currentIndex: 0
  };

  constructor(props) {
    super(props)
  }

  onChangeTabHandler = (index) => {
    if (index !== this.state.index) {
      this.setState({ currentIndex: index })
      this.props.onChange(index)
    }
  }

  render() {
    const { children } = this.props

    return (
      <div>
        <nav className={styles.tabTitles}>
          {React.Children.map(children, (child, index) => (
            <div className={styles.tabTitle}>
              <span
                className={classnames({
                    [styles.titleActive]: index === this.state.currentIndex
                })}
                onTouchTap={() => this.onChangeTabHandler(index)}
              >
                {child.props.tab}
              </span>
            </div>
          ))}
        </nav>
        <div className={styles.tabContents}>
          {React.Children.map(children, (child, index) => (
            index === this.state.currentIndex ?
              <div className={styles.content}>
                {child}
              </div> : null
          ))}
        </div>
      </div>
    )
  }
}

export default Tabs
