import React, { Component, PropTypes } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { Flex } from 'components'
import noOrderImg from './images/noOrder.png'
import * as actions from 'modules/Order/action'
import styles from './Order.scss'

const FlexItem = Flex.Item

@connect(
  state => ({
    orderInfo: state.order.orderInfo,
  }),
  dispatch => ({
    getOrder: () => {
      dispatch(actions.getOrder())
    },
  })
)
class Order extends Component {

  componentDidMount() {
    setTitle('订单详情')
    this.props.getOrder()
  }

  render() {
    const { orderInfo } = this.props
    return (
      <div className="grey-bg">
        <div className={styles.container}>
          {orderInfo.info.length > 0 && orderInfo.info.map(item => (
            <div className={styles.order} key={item.id}>
              <Flex className={styles.orderHeader} alignItems="center" justifyContent="space-between">
                <FlexItem>
                  <p>订单编号：{item.orderNum}</p>
                  <p>创建日期：{moment(item.addTime).format('YYYY-MM-DD')}</p>
                </FlexItem>
                <FlexItem>
                  <h2>{item.statusName}</h2>
                </FlexItem>
              </Flex>
              <div className={styles.orderBody}>
                <div className={styles.content}>
                  <p>
                    <span>业主姓名</span>
                    <span>{item.ownerName}</span>
                  </p>
                  <p>
                    <span>业主手机号</span>
                    <span>{item.ownerPhone}</span>
                  </p>
                  <p>
                    <span>房屋地址</span>
                    <span>{item.ownerAddress}</span>
                  </p>
                </div>
              </div>
              <div className={styles.orderFooter}>
                <div className={styles.content}>
                  <p>
                    <span>施工项目</span>
                    <span>{item.itemName}</span>
                  </p>
                  <p>
                    <span>总价格</span>
                    <span className="green-color">¥ {item.actualPrice}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
          {orderInfo.info.length <= 0 &&
            <div className={styles.noOrder}>
              <img src={noOrderImg} alt=""/>
              <p>当前无可用订单~</p>
            </div>
          }
        </div>
      </div>
    )
  }
}

export default Order
