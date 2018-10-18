import React from 'react'
import BABYLON from 'babylonjs'

class PowerEase extends React.Component {
  constructor (props) {
    super(props)
    const { power, power } = props
    this.PowerEase = new BABYLON.PowerEase(power)
    this.PowerEase.power = power
  }

  render () {
    return null
  }
}

export default PowerEase

