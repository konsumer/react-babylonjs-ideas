import React from 'react'
import BABYLON from 'babylonjs'

class ColorGradient extends React.Component {
  constructor (props) {
    super(props)
    const { gradient, color1, color2 } = props
    this.ColorGradient = new BABYLON.ColorGradient()
    this.ColorGradient.gradient = gradient
    this.ColorGradient.color1 = color1
    this.ColorGradient.color2 = color2
  }

  render () {
    return null
  }
}

export default ColorGradient

