import React, { Component, PropTypes } from 'react'
import Icon from '../Icon/Icon'
import styles from './Radio.scss'

class Radio extends Component {
    static propTypes = {

    };

    state = {

    };

    constructor(props) {
        super(props)
    }

    render() {
        const { label, name } = this.props

        return (
            <label className={styles.radioWrapper}>
                <span className={styles.radio}>
                    <input type="radio" name={name} className={styles.radioInput} />
                    <span className={styles.checked}>
                        <Icon icon="queren" fontSize="20px" />
                    </span>
                </span>
                <span>{label}</span>
            </label>
        )
    }
}

export default Radio
