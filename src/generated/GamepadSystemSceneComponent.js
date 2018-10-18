import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class GamepadSystemSceneComponent extends React.Component {
  constructor (props) {
    super(props)
    const { name, scene, scene } = props
    this.GamepadSystemSceneComponent = new BABYLON.GamepadSystemSceneComponent(scene)
    this.GamepadSystemSceneComponent.name = name
    this.GamepadSystemSceneComponent.scene = scene
  }

  render () {
    return null
  }
}

export default withScene(GamepadSystemSceneComponent)

