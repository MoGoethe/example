import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import { connect } from 'react-redux'
import { createForm } from 'rc-form'
import { browserHistory } from 'react-router'
import { RouteTransition } from 'react-router-transition'
import * as actions from 'modules/Completing/action'
import { Select, ListItem, Footer, Topbar, Input, Icon, Modal, Button, Toast, notify, Loader } from 'components'
import styles from './Completing.scss'
import { notifyError } from 'utils'
import Protocol from './Protocol'

const LeftItem = ListItem.LeftItem
const RightItem = ListItem.RightItem

@connect(
  state => ({
    createOrderStatus: state.completing.createOrderStatus,
    getConfirmCodeStatus: state.completing.getConfirmCodeStatus,
    showLoading: state.completing.showLoading,
  }),
  dispatch => ({
    createOrder: (params) => {
      dispatch(actions.createOrder(params))
    },
    getConfirmCode: (params) => {
      dispatch(actions.getConfirmCode(params))
    },
  })
)
class Completing extends Component {
  static propTypes = {

  };

  state = {
    showModal: false,
    btnText: '发送',
    isSendVercode: false,
    submitDisabled: true,
    calcParams: {}
  };

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const calcParams = window.sessionStorage.calcParams && JSON.parse(window.sessionStorage.calcParams)
    this.setState({
      calcParams
    })
  }

  componentDidMount() {
    setTitle('补全信息')
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.createOrderStatus !== this.props.createOrderStatus) {
      if (nextProps.createOrderStatus.orderNum) {
        browserHistory.push('/result')
      } else {
        notify(nextProps.createOrderStatus.errMsg)
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  showModal = (e) => {
    e.preventDefault()
    this.setState({ showModal: true })
  }

  onCancel = () => {
    this.setState({ showModal: false })
  }

  sendVercode = () => {
    const newCalcParams = {...this.state.calcParams }
    const { form: { getFieldsValue }, getConfirmCode } = this.props
    const values = getFieldsValue()

    if (!values.ownerPhone) {
      notify('业主手机号不能为空')
    }

    if (!values.ownerAddress) {
      notify('房屋地址不能为空')
    }

    this.props.getConfirmCode({
      mobile: values.ownerPhone,
      itemName: newCalcParams.itemName,
      ownerAddress: values.ownerAddress,
      actualPrice: newCalcParams.price
    })
    this.countDown()
  }

  countDown = () => {
    let second = 60
    this.setState({
      isSendVercode: true,
    })

    this.timer = setInterval(() => {
      if (second === 0) {
        this.setState({
          isSendVercode: false,
          btnText: '重发'
        })
        clearInterval(this.timer)
        return
      }
      this.setState({ btnText: `${second}s` })
      second--
    }, 1000)
  }

  checkField = () => {
    setTimeout(() => {
      this.props.form.validateFields((err => {
        if (!err) {
          this.setState({ submitDisabled: false })
        } else {
          this.setState({ submitDisabled: true })
        }
      }))
    }, 0)
  }

  onSubmit = () => {
    const newCalcParams = {...this.state.calcParams }
    const { createOrder } = this.props
    const memberInfo = JSON.parse(window.sessionStorage.memberInfo)
    delete newCalcParams.price

    this.props.form.validateFields(((err, values) => {
      if (err) {
        notifyError(err, notify)
        return
      }

      createOrder({
        ...newCalcParams,
        ...values,
        memberId: memberInfo.id
      })
    }))
  }

  render() {
    const { getFieldDecorator, showLoading } = this.props.form
    const { showModal, isSendVercode, btnText, submitDisabled, calcParams } = this.state

    return (
      <RouteTransition
        pathname={this.props.location.pathname}
        atEnter={{ translateX: 80 }}
        atLeave={{ translateX: -80 }}
        atActive={{ translateX: 0 }}
        mapStyles={styles => ({ transform: `translateX(${styles.translateX}%)` })}
      >
        <div className="grey-bg">
          <Topbar label="总价格" price={calcParams.price} />
          <ListItem>
            <LeftItem>
              业主姓名
            </LeftItem>
            <RightItem>
              {getFieldDecorator('ownerName', {
                rules: [{ required: true, message: '业主姓名不能为空' }],
                initialValue: '',
              })(
                <Input className="text-right" />
              )}
            </RightItem>
          </ListItem>
          <ListItem>
            <LeftItem>
              业主手机号
            </LeftItem>
            <RightItem>
              {getFieldDecorator('ownerPhone', {
                rules: [{ required: true, message: '业主手机号不能为空' }],
                initialValue: '',
              })(
                <Input className="text-right" number />
              )}
            </RightItem>
          </ListItem>
          <ListItem>
            <LeftItem>
              房屋地址
            </LeftItem>
            <RightItem>
              {getFieldDecorator('ownerAddress', {
                rules: [{ required: true, message: '房屋地址不能为空' }],
                initialValue: '',
              })(
                <Input className="text-right" />
              )}
            </RightItem>
          </ListItem>
          <ListItem>
            <LeftItem>
              确认码
              <Button
                onTouchTap={this.sendVercode}
                type="ghost"
                width={120}
                height={50}
                disabled={isSendVercode}
                style={{marginLeft: 20}}
              >
                {btnText}
              </Button>
            </LeftItem>
            <RightItem>
              {getFieldDecorator('vercode', {
                rules: [{ required: true, message: '确认码不能为空' }],
                initialValue: '',
              })(
                <Input className="text-right" number onChange={this.checkField} />
              )}
            </RightItem>
          </ListItem>
          <p className={styles.protocol}>
            <Icon icon="agreen" /> 同意房装装在线设计服务协议 <a onTouchTap={this.showModal}>协议详情</a>
          </p>
          <Modal showModal={showModal} onCancel={this.onCancel} documentClose={true}>
            <Modal.Content className={styles.modalContent}>
              <h3 className={styles.modalTitle}>- 用户协议 -</h3>
              <Protocol />
            </Modal.Content>
          </Modal>
          <Footer
            label="创建订单"
            onSubmit={this.onSubmit}
            disabled={submitDisabled}
            nextIcon={false}
          />
          <Toast />
          <Loader showLoading={showLoading} />
        </div>
      </RouteTransition>
    )
  }
}

export default createForm()(Completing)
