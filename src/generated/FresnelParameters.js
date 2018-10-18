import React from 'react'
import BABYLON from 'babylonjs'

class FresnelParameters extends React.Component {
  constructor (props) {
    super(props)
    const { isEnabled, leftColor, rightColor, bias, power } = props
    this.FresnelParameters = new BABYLON.FresnelParameters()
    this.FresnelParameters.isEnabled = isEnabled
    this.FresnelParameters.leftColor = leftColor
    this.FresnelParameters.rightColor = rightColor
    this.FresnelParameters.bias = bias
    this.FresnelParameters.power = power
  }

  render () {
    return null
  }
}

export default FresnelParameters

