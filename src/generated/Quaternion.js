import React from 'react'
import BABYLON from 'babylonjs'

class Quaternion extends React.Component {
  constructor (props) {
    super(props)
    const { x, y, z, w, x, y, z, w } = props
    this.Quaternion = new BABYLON.Quaternion(x, y, z, w)
    this.Quaternion.x = x
    this.Quaternion.y = y
    this.Quaternion.z = z
    this.Quaternion.w = w
  }

  render () {
    return null
  }
}

export default Quaternion

