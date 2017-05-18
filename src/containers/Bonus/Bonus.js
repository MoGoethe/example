import React, { Component, PropTypes } from 'react'
import { Icon, ListItem } from 'components'
import { connect } from 'react-redux'
import moment from 'moment'
import { browserHistory } from 'react-router'
import styles from './Bonus.scss'
import * as actions from 'modules/Bonus/action'

const LeftItem = ListItem.LeftItem
const RightItem = ListItem.RightItem

@connect(
  state => ({
    memberAccount: state.bonus.memberAccount,
    acountDetail: state.bonus.acountDetail,
  }),
  dispatch => ({
    getMemberAccount: () => {
      dispatch(actions.getMemberAccount())
    },
    getAccountDetail: () => {
      dispatch(actions.getAccountDetail())
    }
  })
)
class Bonus extends Component {
  static propTypes = {

  };

  state = {

  };

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    setTitle('我的奖金')
    this.props.getMemberAccount()
    this.props.getAccountDetail()
  }

  withdraw = (e) => {
    e.preventDefault()
    const { memberAccount } = this.props

    if (memberAccount.info.balance > 0) {
      browserHistory.push('/withdraw')
    }
  }

  render() {
    const { memberAccount, acountDetail } = this.props
    return (
      <div className="grey-bg">
        <div className={styles.header}>
          <p>可提现金额</p>
          <div className={styles.withdraw}>
            <span className={styles.symbol}>¥</span>
            <div className={styles.money}>
              {memberAccount.info.balance}
            </div>
            <a href="" onTouchTap={this.withdraw} className={styles.withdrawBtn}>
              <Icon icon="tixian" fontSize="40px" /> 提现
            </a>
          </div>
          <span className={styles.tips}>*每笔提现需300元以上</span>
        </div>
        <ListItem>
          <LeftItem>
            账户历史
          </LeftItem>
        </ListItem>
        {acountDetail.info.map(item => (
          <ListItem key={item.id}>
            <LeftItem>
              <p>{item.io === '1' ? (item.status == 0 ? '提现取消' : (item.status == 1 ? '提现申请中' : '提现成功')) : <span>订单编号：{item.orderNum}</span>}</p>
              <p className={styles.time}>{moment(item.addTime).format('YYYY-MM-DD')}</p>
            </LeftItem>
            <RightItem>
              <p className={styles.ioText}>
                {item.io === '1' ?
                  <span className="red-color">-{item.amount}</span> :
                  <span className="green-color">+{item.amount}</span>
                }
              </p>
            </RightItem>
          </ListItem>
        ))}
      </div>
    )
  }
}

export default Bonus
