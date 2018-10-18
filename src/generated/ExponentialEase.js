import React from 'react'
import BABYLON from 'babylonjs'

class ExponentialEase extends React.Component {
  constructor (props) {
    super(props)
    const { exponent, exponent } = props
    this.ExponentialEase = new BABYLON.ExponentialEase(exponent)
    this.ExponentialEase.exponent = exponent
  }

  render () {
    return null
  }
}

export default ExponentialEase

