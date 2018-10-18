import React from 'react'
import BABYLON from 'babylonjs'

class FactorGradient extends React.Component {
  constructor (props) {
    super(props)
    const { gradient, factor1, factor2 } = props
    this.FactorGradient = new BABYLON.FactorGradient()
    this.FactorGradient.gradient = gradient
    this.FactorGradient.factor1 = factor1
    this.FactorGradient.factor2 = factor2
  }

  render () {
    return null
  }
}

export default FactorGradient

