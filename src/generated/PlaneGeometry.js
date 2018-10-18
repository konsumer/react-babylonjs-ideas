import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class PlaneGeometry extends React.Component {
  constructor (props) {
    super(props)
    const { size, side, id, scene, size, canBeRegenerated, mesh, side } = props
    this.PlaneGeometry = new BABYLON.PlaneGeometry(id, scene, size, canBeRegenerated, mesh, side)
    this.PlaneGeometry.size = size
    this.PlaneGeometry.side = side
  }

  render () {
    return null
  }
}

export default withScene(PlaneGeometry)

