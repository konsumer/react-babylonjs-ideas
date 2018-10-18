import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class GroundGeometry extends React.Component {
  constructor (props) {
    super(props)
    const { width, height, subdivisions, id, scene, width, height, subdivisions, canBeRegenerated, mesh } = props
    this.GroundGeometry = new BABYLON.GroundGeometry(id, scene, width, height, subdivisions, canBeRegenerated, mesh)
    this.GroundGeometry.width = width
    this.GroundGeometry.height = height
    this.GroundGeometry.subdivisions = subdivisions
  }

  render () {
    return null
  }
}

export default withScene(GroundGeometry)

