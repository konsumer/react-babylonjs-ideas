import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class LayerSceneComponent extends React.Component {
  constructor (props) {
    super(props)
    const { name, scene, scene } = props
    this.LayerSceneComponent = new BABYLON.LayerSceneComponent(scene)
    this.LayerSceneComponent.name = name
    this.LayerSceneComponent.scene = scene
  }

  render () {
    return null
  }
}

export default withScene(LayerSceneComponent)

