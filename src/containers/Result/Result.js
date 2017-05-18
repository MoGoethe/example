import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'
import headerImg from './images/xdcg.png'
import { Icon, Button } from 'components'
import styles from './Result.scss'

class Result extends Component {

  componentDidMount() {
    setTitle('下单成功')
  }

  goIndexPage = () => {
    browserHistory.push('/indexPage')
  }

  goOrder = () => {
    browserHistory.push('/order')
  }

  render() {
    return (
      <div className="grey-bg">
        <header className={styles.header}>
          <img src={headerImg} alt=""/>
        </header>
        <h1 className={styles.title}>
          <Icon icon="queren" />下单成功
        </h1>
        <div className={styles.buttons}>
          <Button type="primary" onTouchTap={this.goOrder}>查看我的订单</Button>
          <Button type="primary" onTouchTap={this.goIndexPage}>返回首页</Button>
        </div>
      </div>
    )
  }
}

export default Result
