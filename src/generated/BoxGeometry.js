import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class BoxGeometry extends React.Component {
  constructor (props) {
    super(props)
    const { size, side, id, scene, size, canBeRegenerated, mesh, side } = props
    this.BoxGeometry = new BABYLON.BoxGeometry(id, scene, size, canBeRegenerated, mesh, side)
    this.BoxGeometry.size = size
    this.BoxGeometry.side = side
  }

  render () {
    return null
  }
}

export default withScene(BoxGeometry)

