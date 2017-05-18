import React, { Component, PropTypes } from 'react'
import headerImg from './images/header.jpg'
import { Button } from 'components'
import styles from './OtherItem.scss'

class OtherItem extends Component {
  static propTypes = {

  };

  state = {

  };

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    setTitle('其他项目')
  }

  render() {
    return (
      <div>
        <img src={headerImg} className="img-block" alt=""/>
        <div className="container">
          <a href="tel:4009939308" className={styles.button}>
            咨询报价
          </a>
        </div>
      </div>
    )
  }
}

export default OtherItem
