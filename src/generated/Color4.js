import React from 'react'
import BABYLON from 'babylonjs'

class Color4 extends React.Component {
  constructor (props) {
    super(props)
    const { r, g, b, a, r, g, b, a } = props
    this.Color4 = new BABYLON.Color4(r, g, b, a)
    this.Color4.r = r
    this.Color4.g = g
    this.Color4.b = b
    this.Color4.a = a
  }

  render () {
    return null
  }
}

export default Color4

