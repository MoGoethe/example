import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { createForm } from 'rc-form'
import * as actions from 'modules/Login/action'
import { Flex, ListItem, Input, Icon, Button, Toast, notify, Loader } from 'components'
import logoImg from './images/logo.png'
import styles from './Login.scss'

const FlexItem = Flex.Item

@connect(
  state => ({
    getVercodeStatus: state.login.getVercodeStatus,
    checkVercodeStatus: state.login.checkVercodeStatus,
    showLoading: state.login.showLoading,
  }),
  dispatch => ({
    getVercode: (mobile) => {
      dispatch(actions.getVercode(mobile))
    },
    checkVercode: (mobile, vercode) => {
      dispatch(actions.checkVercode(mobile, vercode))
    },
  })
)
class Login extends Component {

  state = {
    sendBtnDisabled: false,
    sendText: '验证'
  };

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    setTitle('登录 / 注册')
  }

  componentWillReceiveProps(nextProps) {
    const { checkVercodeStatus } = nextProps
    const { location } = this.props

    if (checkVercodeStatus !== this.props.checkVercodeStatus) {
      if (checkVercodeStatus.vercodeIsCorrect) {
        location.state && location.state.nextPathname ?
        browserHistory.replace(location.state.nextPathname) :
        browserHistory.replace('/indexPage')
      } else {
        notify(checkVercodeStatus.errMsg)
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  sendVercode = () => {
    const mobile = this.props.form.getFieldValue('mobile')

    if (mobile.length !== 11) {
      notify('请输入正确的手机号')
    } else {
      this.props.getVercode(mobile)
      this.countDown()
    }
  }

  countDown = () => {
    let second = 60
    this.setState({ sendBtnDisabled: true })
    this.timer = setInterval(() => {
      if (second === 0) {
        this.setState({
          sendBtnDisabled: false,
          sendText: '验证'
        })
        clearInterval(this.timer)
        return
      }
      this.setState({ sendText: `${second}s` })
      second--
    }, 1000)
  }

  register = () => {
    const values = this.props.form.getFieldsValue()
    if (values.vercode.length === 4) {
      this.props.checkVercode(values.mobile, values.vercode)
    }
  }

  render() {
    const { sendBtnDisabled, sendText } = this.state
    const { getFieldDecorator } = this.props.form
    const { showLoading } = this.props

    return (
      <div>
        <div className={styles.header}>
          <img src={logoImg} alt=""/>
          <p>登录 / 注册</p>
        </div>
        <div className="container">
          <Flex alignItems="center">
            <FlexItem flex={10}>
              <Icon icon="shoujihaoshouji" fontSize="50px" color="#B1B2B3" />
            </FlexItem>
            <FlexItem flex={90}>
              <ListItem>
                {getFieldDecorator('mobile', {
                  rules: [{ required: true, message: '请输入手机号' }],
                  initialValue: '',
                })(
                  <Input placeholder="请输入手机号" type="text" number />
                )}
                <Button
                  type="primary"
                  onTouchTap={this.sendVercode}
                  width={160}
                  height={70}
                  disabled={sendBtnDisabled}
                  className={styles.vercodeButton}
                >
                  {sendText}
                </Button>
              </ListItem>
            </FlexItem>
          </Flex>
          <Flex alignItems="center">
            <FlexItem flex={10}>
              <Icon icon="mima" fontSize="50px" color="#B1B2B3" />
            </FlexItem>
            <FlexItem flex={90}>
              <ListItem>
                {getFieldDecorator('vercode', {
                  rules: [{ required: true, message: '请输入验证码' }],
                  initialValue: '',
                })(
                  <Input placeholder="请输入验证码" type="text" number />
                )}
              </ListItem>
            </FlexItem>
          </Flex>
          <Button
            type="primary"
            block
            className={styles.submitButton}
            onTouchTap={this.register}
          >
            确认
          </Button>
        </div>
        <Toast />
        <Loader showLoading={showLoading} />
      </div>
    )
  }
}

export default createForm()(Login)
