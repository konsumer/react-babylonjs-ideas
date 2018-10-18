import React from 'react'
import BABYLON from 'babylonjs'

class ElasticEase extends React.Component {
  constructor (props) {
    super(props)
    const { oscillations, springiness, oscillations, springiness } = props
    this.ElasticEase = new BABYLON.ElasticEase(oscillations, springiness)
    this.ElasticEase.oscillations = oscillations
    this.ElasticEase.springiness = springiness
  }

  render () {
    return null
  }
}

export default ElasticEase

