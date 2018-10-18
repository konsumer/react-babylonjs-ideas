import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class TiledGroundGeometry extends React.Component {
  constructor (props) {
    super(props)
    const { xmin, zmin, xmax, zmax, subdivisions, precision, id, scene, xmin, zmin, xmax, zmax, subdivisions, precision, canBeRegenerated, mesh } = props
    this.TiledGroundGeometry = new BABYLON.TiledGroundGeometry(id, scene, xmin, zmin, xmax, zmax, subdivisions, precision, canBeRegenerated, mesh)
    this.TiledGroundGeometry.xmin = xmin
    this.TiledGroundGeometry.zmin = zmin
    this.TiledGroundGeometry.xmax = xmax
    this.TiledGroundGeometry.zmax = zmax
    this.TiledGroundGeometry.subdivisions = subdivisions
    this.TiledGroundGeometry.precision = precision
  }

  render () {
    return null
  }
}

export default withScene(TiledGroundGeometry)

