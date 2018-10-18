import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class OutlineRenderer extends React.Component {
  constructor (props) {
    super(props)
    const { name, scene, zOffset, scene } = props
    this.OutlineRenderer = new BABYLON.OutlineRenderer(scene)
    this.OutlineRenderer.name = name
    this.OutlineRenderer.scene = scene
    this.OutlineRenderer.zOffset = zOffset
  }

  render () {
    return null
  }
}

export default withScene(OutlineRenderer)

