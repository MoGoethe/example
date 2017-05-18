import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { createForm } from 'rc-form'
import { browserHistory } from 'react-router'
import * as actions from 'modules/IndexPage/action'
import { getVercode, checkVercode, getLoginStatus } from 'modules/Login/action'
import stepImg from './images/step.png'
import advantageImg from './images/advantage.png'
import { Card, Button, Icon, Flex, Modal, ListItem, Input, Toast, notify, Loader } from 'components'
import styles from './IndexPage.scss'

const FlexItem = Flex.Item

@connect(
  state => ({
    tEcommItem: state.indexPage.tEcommItem,
    loginStatus: state.login.loginStatus,
    showLoading: state.login.showLoading,
    checkVercodeStatus: state.login.checkVercodeStatus,
  }),
  dispatch => ({
    getTEcommItem: (params) => {
      dispatch(actions.getTEcommItem(params))
    },
    getLoginStatus: () => {
      dispatch(getLoginStatus())
    },
    getVercode: (mobile) => {
      dispatch(getVercode(mobile))
    },
    checkVercode: (mobile, vercode) => {
      dispatch(checkVercode(mobile, vercode))
    },
  })
)
class IndexPage extends Component {
  static propTypes = {

  };

  state = {
    showModal: false,
    sendBtnDisabled: false,
    sendText: '验证',
    nextRoute: ''
  };

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    setTitle('房装装')
    // delete window.localStorage.token
    this.props.getTEcommItem()
    this.props.getLoginStatus()
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  componentWillReceiveProps(nextProps) {
    const { checkVercodeStatus, location } = nextProps

    if (checkVercodeStatus !== this.props.checkVercodeStatus) {
      if (checkVercodeStatus.vercodeIsCorrect) {
        browserHistory.push(this.state.nextRoute)
      } else {
        notify(checkVercodeStatus.errMsg)
      }
    }
  }

  tapIconHandler(itemId) {
    if (!this.props.loginStatus.isLogined) {
      this.setState({ showModal: true, nextRoute: `business/${itemId}` })
    } else {
      itemId === 9 ?
        browserHistory.push('/otherItem') :
        browserHistory.push(`/business/${itemId}`)
    }
  }

  sendVercode = () => {
    const mobile = this.props.form.getFieldValue('mobile')

    if (mobile.length === 11) {
      this.props.getVercode(mobile)
      this.countDown()
    }
  }

  onSubmit = () => {
    const values = this.props.form.getFieldsValue()
    if (values.vercode.length === 4) {
      this.props.checkVercode(values.mobile, values.vercode)
    }
  }

  countDown = () => {
    let second = 60
    this.setState({ sendBtnDisabled: true })
    this.timer = setInterval(() => {
      if (second === 0) {
        this.setState({ sendBtnDisabled: false, sendText: '验证' })
        clearInterval(this.timer)
        return
      }
      this.setState({ sendText: `${second}s` })
      second--
    }, 1000)
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  render() {
    const { tEcommItem, showLoading } = this.props
    const { getFieldDecorator } = this.props.form
    const { showModal, sendText, sendBtnDisabled } = this.state

    return (
      <div className={styles.container}>
        <Card className={styles.menu} width={700}>
          {tEcommItem.info.map(item => (
            <div className={styles.items} key={item.id}>
              <Button
                onTouchTap={() => this.tapIconHandler(item.id)}
                className={styles.itemIcn}
                backgroundColor={item.iconColor}
              >
                <Icon icon={item.iconName} />
              </Button>
              <p className={styles.menuText}>{item.name}</p>
            </div>
          ))}
        </Card>
        <div className={styles.process}>
          <h2>服务流程</h2>
          <img src={stepImg} className="img-block" alt=""/>
        </div>
        <div className={styles.process + ' ' + styles.advantage}>
          <h2>服务优势</h2>
          <img src={advantageImg} className="img-block center-block" alt=""/>
        </div>
        <Modal showModal={showModal} documentClose={true} onCancel={this.closeModal}>
          <Modal.Content>
            <h3 className={styles.title}>- 登录 / 注册 -</h3>
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
                width={140}
                height={60}
                disabled={sendBtnDisabled}
              >
                {sendText}
              </Button>
            </ListItem>
            <ListItem style={{marginBottom: 40}}>
              {getFieldDecorator('vercode', {
                rules: [{ required: true, message: '请输入验证码' }],
                initialValue: '',
              })(
                <Input placeholder="请输入验证码" type="text" number />
              )}
            </ListItem>
          </Modal.Content>
          <Modal.Actions>
            <Button block type="primary" height={80} onTouchTap={this.onSubmit}>确认</Button>
          </Modal.Actions>
        </Modal>
        <Toast />
        <Loader showLoading={showLoading} />
      </div>
    )
  }
}

export default createForm()(IndexPage)
