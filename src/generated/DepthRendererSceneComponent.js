import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class DepthRendererSceneComponent extends React.Component {
  constructor (props) {
    super(props)
    const { name, scene, scene } = props
    this.DepthRendererSceneComponent = new BABYLON.DepthRendererSceneComponent(scene)
    this.DepthRendererSceneComponent.name = name
    this.DepthRendererSceneComponent.scene = scene
  }

  render () {
    return null
  }
}

export default withScene(DepthRendererSceneComponent)

