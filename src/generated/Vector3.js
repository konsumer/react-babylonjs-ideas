import React from 'react'
import BABYLON from 'babylonjs'

class Vector3 extends React.Component {
  constructor (props) {
    super(props)
    const { x, y, z, isNonUniform, x, y, z } = props
    this.Vector3 = new BABYLON.Vector3(x, y, z)
    this.Vector3.x = x
    this.Vector3.y = y
    this.Vector3.z = z
    this.Vector3.isNonUniform = isNonUniform
  }

  render () {
    return null
  }
}

export default Vector3

