import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { createForm } from 'rc-form'
import { browserHistory } from 'react-router'
import * as actions from 'modules/Withdraw/action'
import styles from './Withdraw.scss'
import { ListItem, Toast, notify, Button, Select, Input, Loader } from 'components'
import { notifyError } from 'utils'

const LeftItem = ListItem.LeftItem
const RightItem = ListItem.RightItem
const Option = Select.Option

@connect(
  state => ({
    bankInfo: state.withdraw.bankInfo,
    lastMemberAcount: state.withdraw.lastMemberAcount,
    expenditureStatus: state.withdraw.expenditureStatus,
    showLoading: state.withdraw.showLoading,
  }),
  dispatch => ({
    getBank: () => {
      dispatch(actions.getBank())
    },
    getLastMemberAccount: () => {
      dispatch(actions.getLastMemberAccount())
    },
    expenditure: (amount, memberBankAccountId) => {
      dispatch(actions.expenditure(amount, memberBankAccountId))
    },
    createAndExpenditure: (payload, amount) => {
      dispatch(actions.createAndExpenditure(payload, amount))
    },
  })
)
class Withdraw extends Component {
  static propTypes = {

  };

  state = {

  };

  constructor(props) {
    super(props)
    this.memberAccount = {}
  }

  componentWillMount() {
    if (window.sessionStorage.memberAccount) {
      this.memberAccount = JSON.parse(window.sessionStorage.memberAccount)
    } else {
      browserHistory.push('/bonus')
    }
  }

  componentDidMount() {
    setTitle('提现')
    this.props.getBank()
    this.props.getLastMemberAccount()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.expenditureStatus !== this.props.expenditureStatus) {
      if (nextProps.expenditureStatus.isSuccess) {
        notify('提现成功', 1500, () => {
          browserHistory.push('/bonus')
        })
      } else {
        notify(nextProps.expenditureStatus.errMsg)
      }
    }
  }

  onChange = (e) => {
    // console.log(e)
    this.setState({
      value: e.target.value
    })
  }

  withdraw = () => {
    const { form: { validateFields }, lastMemberAcount, expenditure, createAndExpenditure } = this.props
    validateFields(((err, values) => {
      if (err) {
        notifyError(err, notify)
        return
      }

      if (lastMemberAcount.info && lastMemberAcount.info.number === values.number) {
        expenditure(values.amount, lastMemberAcount.info.id)
      } else {
        createAndExpenditure({
          ...values,
          memberAccountId: this.memberAccount.id
        }, values.amount)
      }
    }))
  }

  checkBankNumber = (rule, value, callback) => {
    if (value.length >= 15 && value.length <= 19) {
      callback()
      return
    }
    callback('银行帐号格式错误')
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const { bankInfo, lastMemberAcount, showLoading } = this.props
    const lastMemberAcountInfo = lastMemberAcount.info

    return (
      <div className="grey-bg">
        <ListItem>
          <LeftItem>
            银行名称
          </LeftItem>
          <RightItem>
            {getFieldDecorator('bankId', {
              rules: [{ required: true, message: '请选择银行名称' }],
              initialValue: lastMemberAcountInfo.bankId && lastMemberAcountInfo.bankId.toString(),
            })(
              <Select placeholder="请选择" style={{width: 140}}>
                {bankInfo.map(item => (
                  <Option key={item.id} value={item.id}>{item.name}</Option>
                ))}
              </Select>
            )}
          </RightItem>
        </ListItem>
        <ListItem>
          <LeftItem>
            银行帐号
          </LeftItem>
          <RightItem>
            {getFieldDecorator('number', {
              // rules: [{ required: true, message: '请填写银行帐号'}],
              rules: [{ validator: this.checkBankNumber }],
              initialValue: lastMemberAcountInfo.number,
            })(
              <Input number className="text-right" placeholder="输入银行帐号" />
            )}
          </RightItem>
        </ListItem>
        <ListItem>
          <LeftItem>
            持卡人
          </LeftItem>
          <RightItem>
            {getFieldDecorator('name', {
              rules: [{ required: true, message: '请填写持卡人' }],
              initialValue: lastMemberAcountInfo.name,
            })(
              <Input className="text-right" placeholder="输入持卡人姓名" />
            )}
          </RightItem>
        </ListItem>
        <ListItem>
          <LeftItem>
            支行名称
          </LeftItem>
          <RightItem>
            {getFieldDecorator('bankBranchFullName', {
              initialValue: lastMemberAcountInfo.bankBranchFullName,
            })(
              <Input className="text-right" placeholder="选填" />
            )}
          </RightItem>
        </ListItem>
        <ListItem>
          <LeftItem>
            提现金额
          </LeftItem>
          <RightItem>
            {getFieldDecorator('amount', {
              rules: [{ required: true, message: '请输入金额' }],
              initialValue: '',
            })(
              <Input type="number" className="text-right" placeholder="请输入金额" />
            )}
          </RightItem>
        </ListItem>
        <div className={styles.blanceText}>
          账户余额：{this.memberAccount.balance}元
        </div>
        <div className={styles.actions}>
          <Button
            type="primary"
            onTouchTap={this.withdraw}
            block
          >
            申请提现
          </Button>
          <div className={styles.rule}>
            <span className={styles.ruleTitle}>提现须知</span>
            <p>1、每笔提现需300元以上。</p>
            <p>2、申请提现的注册账户人名必须与收款账户（银行卡）人名一致，否则，我司将不予处理。</p>
            <p>3、因客户通过银行卡向我司汇款时，我司承担了转账手续费，因此我司将在提现时，扣除4%的手续费，最低4元。</p>
            <p>4、我司在收到账户余额提现申请之日起，于3-7个工作日内完成审核并退款至申请人指定银行账户。</p>
          </div>
        </div>
        <Toast />
        <Loader showLoading={showLoading} />
      </div>
    )
  }
}

export default createForm()(Withdraw)
