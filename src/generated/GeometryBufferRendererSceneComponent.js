import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class GeometryBufferRendererSceneComponent extends React.Component {
  constructor (props) {
    super(props)
    const { name, scene, scene } = props
    this.GeometryBufferRendererSceneComponent = new BABYLON.GeometryBufferRendererSceneComponent(scene)
    this.GeometryBufferRendererSceneComponent.name = name
    this.GeometryBufferRendererSceneComponent.scene = scene
  }

  render () {
    return null
  }
}

export default withScene(GeometryBufferRendererSceneComponent)

