import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { createForm } from 'rc-form'
import { browserHistory } from 'react-router'
import { RouteTransition } from 'react-router-transition'
import * as actions from 'modules/Compute/action'
import { Select, ListItem, Footer, Topbar, Input } from 'components'
import styles from './Compute.scss'

const LeftItem = ListItem.LeftItem
const RightItem = ListItem.RightItem
const Option = Select.Option

@connect(
  state => ({
    tEcommItemProperty: state.compute.tEcommItemProperty,
    calculatorPriceStatus: state.compute.calculatorPriceStatus,
  }),
  dispatch => ({
    getTEcommitemProperty: (id) => {
      dispatch(actions.getTEcommitemProperty(id))
    },
    calculatorPrice: (params, itemName) => {
      dispatch(actions.calculatorPrice(params, itemName))
    },
    saveCalculatorParams: (params) => {
      dispatch(actions.saveCalculatorParams(params))
    },
    initCalculatorPrice: () => {
      dispatch(actions.initCalculatorPrice())
    }
  })
)
class Compute extends Component {
  state = {
    disabled: true
  };

  componentDidMount() {
    setTitle('计算价格')
    const { params, getTEcommitemProperty } = this.props
    getTEcommitemProperty(params.itemId)
  }

  componentWillUnmount() {
    this.props.initCalculatorPrice()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.tEcommItemProperty !== this.props.tEcommItemProperty) {
      const { properties } = nextProps.tEcommItemProperty.info
      if (properties.length) {
        const { itemId, propertyId } = this.props.params
        const { setFieldsValue } = this.props.form

        for (let i = 0; i < properties.length; i++) {
          if (properties[i].propertyName === '套餐类型') {
            setFieldsValue({
              [properties[i].id]: propertyId
            })
          }
        }
      }
    }
  }

  calculator = () => {
    const {
      form: { validateFields },
      calculatorPrice,
      params,
      saveCalculatorParams,
      tEcommItemProperty
    } = this.props

    setTimeout(() => {
      validateFields((err, values) => {
        if (err) {
          this.setState({ disabled: true })
          return
        }

        const area = values.area
        delete values.area

        const priceArray = Object.values(values).map(item => {
          return { id: item }
        })

        const calcParams = {
          area: parseInt(area, 10),
          values: priceArray,
          itemId: params.itemId
        }

        this.setState({ disabled: false })
        calculatorPrice(calcParams, tEcommItemProperty.info.name)
      })
    }, 0)
  }

  onSubmit = (e) => {
    e.preventDefault()
    browserHistory.push('/completing')
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const { tEcommItemProperty, calculatorPriceStatus } = this.props
    const { disabled } = this.state
    const { properties } = tEcommItemProperty.info

    return (
      <RouteTransition
        pathname={this.props.location.pathname}
        atEnter={{ translateX: 80 }}
        atLeave={{ translateX: -80 }}
        atActive={{ translateX: 0 }}
        mapStyles={styles => ({ transform: `translateX(${styles.translateX}%)` })}
      >
        <div className="grey-bg">
          <Topbar label="总价格" price={calculatorPriceStatus.price} />
          {properties.length > 0 && properties.map(property => (
            <ListItem key={property.id}>
              <LeftItem>
                {property.propertyName}
              </LeftItem>
              <RightItem>
                {getFieldDecorator([property.id], {
                  rules: [{ required: true, message: '请选择' }],
                  initialValue: '',
                })(
                  <Select placeholder="请选择" style={{width: 140}} onChange={this.calculator}>
                    {property.values.map(val => (
                      <Option key={val.id} value={val.id.toString()}>{val.value}</Option>
                    ))}
                  </Select>
                )}
              </RightItem>
            </ListItem>
          ))}
          <ListItem>
            <LeftItem>
              总面积
            </LeftItem>
            <RightItem>
              {getFieldDecorator('area', {
                rules: [{ required: true, message: '请填写面积' }],
                initialValue: '',
              })(
                <Input type="number" className="text-right" style={{width: 120}} onChange={this.calculator} />
              )}
              <span className={styles.square}>{tEcommItemProperty.info.unit}</span>
            </RightItem>
          </ListItem>
          <Footer label="补全信息" onSubmit={this.onSubmit} disabled={disabled} />
        </div>
      </RouteTransition>
    )
  }
}

export default createForm()(Compute)
