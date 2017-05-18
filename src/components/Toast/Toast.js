import React, { PropTypes, Component } from 'react'
import ReactDOM from 'react-dom'

let notificationWrapperId = 'notification-wrapper'
let defaultDuration = 1500 // ms
let animationDuration = 300 // ms

class Toast extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired
  }

  state = {
    containerStyle: {}
  }

  componentWillUnmount() {
    clearTimeout(this.timerAutoHideId)
    clearTimeout(this.timerAnimationId)
  }

  getStyles() {
    const baseStyle = {
      position: 'fixed',
      display: 'none',
      right: '0px',
      top: '0px',
      left: '0px',
      bottom: '0px',
      margin: 'auto',
      width: '360px',
      lineHeight: '90px',
      textAlign: 'center',
      zIndex: '8888',
      height: '90px',
      fontSize: '28px',
      backgroundColor: 'rgba(0, 0, 0, .5)',
      color: '#fff',
      transition: 'all ' + animationDuration + 'ms ease',
      WebkitTransition: 'all ' + animationDuration + 'ms ease'
    }

    return baseStyle
  }

  getVisibleState(context) {
    const base = this.getStyles()

    // show
    const styleShow = {
      display: 'block'
    }

    // wait 100ms after the component is called to animate toast.
    this.timerAnimationId = setTimeout(() =>
      context.updateStyle(base, styleShow), 100)

    const stylesHide = {
      display: 'none'
    }

    this.timerAutoHideId = setTimeout(() =>
      context.updateStyle(base, stylesHide), this.props.duration)
  }

  updateStyle(base, update) {
    this.setState({ containerStyle: Object.assign({}, base, update) })
  }

  getBaseStyle() {
    this.setState({ containerStyle: this.getStyles() })
  }

  componentDidMount() {
    this.getBaseStyle()
    this.getVisibleState(this)
  }

  render() {
    const { text } = this.props
    const { containerStyle } = this.state

    return (
      <div style={containerStyle}>
        <span>{text}</span>
      </div>
    )
  }
}

/* Unmount React component */
function renderToast(text, duration) {
  ReactDOM.render(
    <Toast duration={duration} text={text} />,
    document.getElementById(notificationWrapperId)
  )
}

/* Unmount React component */
function hideToast() {
  const notificationWrapper = document.getElementById(notificationWrapperId)
  if (notificationWrapper) {
    ReactDOM.unmountComponentAtNode(notificationWrapper)
  }
}

/* Public functions */

/* Show Animated Toast Message. Export notification functions*/
export function notify(text, duration, callback = () => {}) {
  const notificationHasChildNodes = document.getElementById(notificationWrapperId).hasChildNodes()

  if (!notificationHasChildNodes) {
    let renderDuration = duration

    // Use default duration if not set.
    if (!renderDuration) {
      renderDuration = defaultDuration
    }

    // Render Component with Props.
    renderToast(text, renderDuration)

    // Unmount react component after the animation finished.
    setTimeout(function() {
      hideToast()
      callback()
    }, renderDuration + animationDuration)
  }
}

/* Export notification container */
export default class extends Component {
  render() {
    return (
      <div id={notificationWrapperId}></div>
    )
  }
}
