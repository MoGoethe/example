import React, { Component, PropTypes } from 'react'
import faqData from './faq-data'
import styles from './Faq.scss'

class Faq extends Component {
  static propTypes = {

  };

  state = {

  };

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container">
        <header className={styles.header}>
          <h3 className="text-center">你所关心的</h3>
          <h2 className="text-center">环保、付款、保修</h2>
        </header>
        <div className={styles.content}>
          {faqData.map((item, index) => (
            <ul key={`faq-${index}`}>
              <li>{item.question}</li>
              <li>{item.answer}</li>
            </ul>
          ))}
        </div>
      </div>
    )
  }
}

export default Faq
