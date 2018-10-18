import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class EffectLayerSceneComponent extends React.Component {
  constructor (props) {
    super(props)
    const { name, scene, scene } = props
    this.EffectLayerSceneComponent = new BABYLON.EffectLayerSceneComponent(scene)
    this.EffectLayerSceneComponent.name = name
    this.EffectLayerSceneComponent.scene = scene
  }

  render () {
    return null
  }
}

export default withScene(EffectLayerSceneComponent)

