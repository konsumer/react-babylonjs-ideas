import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class DiscGeometry extends React.Component {
  constructor (props) {
    super(props)
    const { radius, tessellation, side, id, scene, radius, tessellation, canBeRegenerated, mesh, side } = props
    this.DiscGeometry = new BABYLON.DiscGeometry(id, scene, radius, tessellation, canBeRegenerated, mesh, side)
    this.DiscGeometry.radius = radius
    this.DiscGeometry.tessellation = tessellation
    this.DiscGeometry.side = side
  }

  render () {
    return null
  }
}

export default withScene(DiscGeometry)

