import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class CylinderGeometry extends React.Component {
  constructor (props) {
    super(props)
    const { height, diameterTop, diameterBottom, tessellation, subdivisions, side, id, scene, height, diameterTop, diameterBottom, tessellation, subdivisions, canBeRegenerated, mesh, side } = props
    this.CylinderGeometry = new BABYLON.CylinderGeometry(id, scene, height, diameterTop, diameterBottom, tessellation, subdivisions, canBeRegenerated, mesh, side)
    this.CylinderGeometry.height = height
    this.CylinderGeometry.diameterTop = diameterTop
    this.CylinderGeometry.diameterBottom = diameterBottom
    this.CylinderGeometry.tessellation = tessellation
    this.CylinderGeometry.subdivisions = subdivisions
    this.CylinderGeometry.side = side
  }

  render () {
    return null
  }
}

export default withScene(CylinderGeometry)

