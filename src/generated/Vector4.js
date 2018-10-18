import React from 'react'
import BABYLON from 'babylonjs'

class Vector4 extends React.Component {
  constructor (props) {
    super(props)
    const { x, y, z, w, x, y, z, w } = props
    this.Vector4 = new BABYLON.Vector4(x, y, z, w)
    this.Vector4.x = x
    this.Vector4.y = y
    this.Vector4.z = z
    this.Vector4.w = w
  }

  render () {
    return null
  }
}

export default Vector4

