import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class PostProcessRenderPipelineManagerSceneComponent extends React.Component {
  constructor (props) {
    super(props)
    const { name, scene, scene } = props
    this.PostProcessRenderPipelineManagerSceneComponent = new BABYLON.PostProcessRenderPipelineManagerSceneComponent(scene)
    this.PostProcessRenderPipelineManagerSceneComponent.name = name
    this.PostProcessRenderPipelineManagerSceneComponent.scene = scene
  }

  render () {
    return null
  }
}

export default withScene(PostProcessRenderPipelineManagerSceneComponent)

