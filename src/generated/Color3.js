import React from 'react'
import BABYLON from 'babylonjs'

class Color3 extends React.Component {
  constructor (props) {
    super(props)
    const { r, g, b, r, g, b } = props
    this.Color3 = new BABYLON.Color3(r, g, b)
    this.Color3.r = r
    this.Color3.g = g
    this.Color3.b = b
  }

  render () {
    return null
  }
}

export default Color3

