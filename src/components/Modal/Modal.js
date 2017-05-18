import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import { ToggleDisplay } from '../internal'
import { ModalContent, ModalActions } from './ModalContainer'
import styles from './modal.scss'

class Modal extends Component {
  static propTypes = {
    documentClose: PropTypes.bool,
    showModal: PropTypes.bool,
    children: PropTypes.any,
    onCancel: PropTypes.func
  };

  static defaultProps = {
    onCancel() {},
  };

  static Content = ModalContent;
  static Actions = ModalActions;

  state = {
    showModal: false
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.showModal !== this.props.showModal) {
      this.setState({ showModal: nextProps.showModal })
    }
  }

  disableMove = (e) => {
    e.preventDefault()
  }

  modalTouchMove = (e) => {
    e.stopPropagation()
  }

  clickMaskHandler = (e) => {
    const { documentClose, onCancel } = this.props

    if (documentClose) {
      if (e.currentTarget === e.target) {
        onCancel()
      }
    }
  }

  render() {
    const { children } = this.props
    const { showModal } = this.state

    return (
      <ToggleDisplay show={showModal}>
        <div
          className={styles.container}
          onTouchMove={this.disableMove}
          onClick={this.clickMaskHandler}
        >
          <div
            className={classnames('animated', 'bounceIn', styles.modal)}
            onTouchMove={this.modalTouchMove}
          >
            {children}
          </div>
        </div>
      </ToggleDisplay>
    )
  }
}

export default Modal
