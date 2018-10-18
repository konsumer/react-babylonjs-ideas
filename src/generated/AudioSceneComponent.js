import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class AudioSceneComponent extends React.Component {
  constructor (props) {
    super(props)
    const { name, scene, audioEnabled, headphone, scene } = props
    this.AudioSceneComponent = new BABYLON.AudioSceneComponent(scene)
    this.AudioSceneComponent.name = name
    this.AudioSceneComponent.scene = scene
    this.AudioSceneComponent.audioEnabled = audioEnabled
    this.AudioSceneComponent.headphone = headphone
  }

  render () {
    return null
  }
}

export default withScene(AudioSceneComponent)

