import React from 'react'
import BABYLON from 'babylonjs'

class Color3Gradient extends React.Component {
  constructor (props) {
    super(props)
    const { gradient, color } = props
    this.Color3Gradient = new BABYLON.Color3Gradient()
    this.Color3Gradient.gradient = gradient
    this.Color3Gradient.color = color
  }

  render () {
    return null
  }
}

export default Color3Gradient

