import React from 'react'
import BABYLON from 'babylonjs'

class Plane extends React.Component {
  constructor (props) {
    super(props)
    const { normal, d, a, b, c, d } = props
    this.Plane = new BABYLON.Plane(a, b, c, d)
    this.Plane.normal = normal
    this.Plane.d = d
  }

  render () {
    return null
  }
}

export default Plane

