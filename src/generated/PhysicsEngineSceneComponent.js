import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class PhysicsEngineSceneComponent extends React.Component {
  constructor (props) {
    super(props)
    const { name, scene, scene } = props
    this.PhysicsEngineSceneComponent = new BABYLON.PhysicsEngineSceneComponent(scene)
    this.PhysicsEngineSceneComponent.name = name
    this.PhysicsEngineSceneComponent.scene = scene
  }

  render () {
    return null
  }
}

export default withScene(PhysicsEngineSceneComponent)

