import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class SphereGeometry extends React.Component {
  constructor (props) {
    super(props)
    const { segments, diameter, side, id, scene, segments, diameter, canBeRegenerated, mesh, side } = props
    this.SphereGeometry = new BABYLON.SphereGeometry(id, scene, segments, diameter, canBeRegenerated, mesh, side)
    this.SphereGeometry.segments = segments
    this.SphereGeometry.diameter = diameter
    this.SphereGeometry.side = side
  }

  render () {
    return null
  }
}

export default withScene(SphereGeometry)

