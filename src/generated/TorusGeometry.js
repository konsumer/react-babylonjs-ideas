import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class TorusGeometry extends React.Component {
  constructor (props) {
    super(props)
    const { diameter, thickness, tessellation, side, id, scene, diameter, thickness, tessellation, canBeRegenerated, mesh, side } = props
    this.TorusGeometry = new BABYLON.TorusGeometry(id, scene, diameter, thickness, tessellation, canBeRegenerated, mesh, side)
    this.TorusGeometry.diameter = diameter
    this.TorusGeometry.thickness = thickness
    this.TorusGeometry.tessellation = tessellation
    this.TorusGeometry.side = side
  }

  render () {
    return null
  }
}

export default withScene(TorusGeometry)

