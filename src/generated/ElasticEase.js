import React from 'react'

class ElasticEase extends React.Component {
  constructor (props) {
    super(props)
    const { oscillations, springiness } = props
    this.ElasticEase = new ElasticEase(oscillations, springiness)
  }

  render () {
    return null
  }
}

export default ElasticEase

