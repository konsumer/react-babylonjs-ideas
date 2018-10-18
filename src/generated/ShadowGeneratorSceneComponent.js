import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class ShadowGeneratorSceneComponent extends React.Component {
  constructor (props) {
    super(props)
    const { name, scene, scene } = props
    this.ShadowGeneratorSceneComponent = new BABYLON.ShadowGeneratorSceneComponent(scene)
    this.ShadowGeneratorSceneComponent.name = name
    this.ShadowGeneratorSceneComponent.scene = scene
  }

  render () {
    return null
  }
}

export default withScene(ShadowGeneratorSceneComponent)

