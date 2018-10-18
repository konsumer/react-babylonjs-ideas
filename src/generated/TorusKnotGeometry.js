import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class TorusKnotGeometry extends React.Component {
  constructor (props) {
    super(props)
    const { radius, tube, radialSegments, tubularSegments, p, q, side, id, scene, radius, tube, radialSegments, tubularSegments, p, q, canBeRegenerated, mesh, side } = props
    this.TorusKnotGeometry = new BABYLON.TorusKnotGeometry(id, scene, radius, tube, radialSegments, tubularSegments, p, q, canBeRegenerated, mesh, side)
    this.TorusKnotGeometry.radius = radius
    this.TorusKnotGeometry.tube = tube
    this.TorusKnotGeometry.radialSegments = radialSegments
    this.TorusKnotGeometry.tubularSegments = tubularSegments
    this.TorusKnotGeometry.p = p
    this.TorusKnotGeometry.q = q
    this.TorusKnotGeometry.side = side
  }

  render () {
    return null
  }
}

export default withScene(TorusKnotGeometry)

