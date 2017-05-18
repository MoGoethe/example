import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import * as actions from 'modules/Business/action'
import styles from './Business.scss'
import { Tabs, RadioItem, Footer } from 'components'

const TabPanel = Tabs.TabPanel

@connect(
  state => ({
    tEcommItemTree: state.business.tEcommItemTree,
  }),
  dispatch => ({
    getTEcommItemTree: (id) => {
      dispatch(actions.getTEcommItemTree(id))
    },
  })
)
class Business extends Component {

  state = {
    nodesId: '',
    propertyId: ''
  };

  componentDidMount() {
    const { params, getTEcommItemTree } = this.props
    getTEcommItemTree(params.itemId)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.tEcommItemTree !== this.props.tEcommItemTree) {
      if (nextProps.tEcommItemTree.info.nodes.length) {
        setTitle(nextProps.tEcommItemTree.info.name)
        this.setState({
          nodesId: nextProps.tEcommItemTree.info.nodes[0].id
        })
      }
    }
  }

  getRadioValue = (value) => {
    this.setState({
      propertyId: value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { propertyId, nodesId } = this.state
    browserHistory.push(`/compute/${nodesId}/${propertyId}`)
  }

  tabChangeHandler = (index) => {
    const { tEcommItemTree } = this.props
    this.setState({
      nodesId: tEcommItemTree.info.nodes[index].id
    })
  }

  render() {
    const { tEcommItemTree } = this.props

    return (
      <div className="grey-bg relative">
        <img src={tEcommItemTree.info.bannerPath} alt="" className={styles.banner}/>
        <Tabs onChange={this.tabChangeHandler}>
          {tEcommItemTree.info.nodes.map(item => (
            <TabPanel tab={item.name} key={item.id}>
              {item.values.map((value, i) => (
                <RadioItem
                  key={i}
                  label={value.value}
                  name={item.code}
                  value={value.id}
                  defaultChecked={i===0}
                  getValue={this.getRadioValue}
                >
                  <span className={styles.itemName}>{value.price}元/{item.unit}</span>
                </RadioItem>
                ))}
              <img src={item.descriptionImagePath} className="img-block" style={{marginTop: 40}} />
            </TabPanel>
          ))}
        </Tabs>
        <Footer label="计算价格" onSubmit={this.onSubmit} />
      </div>
    )
  }
}

export default Business
