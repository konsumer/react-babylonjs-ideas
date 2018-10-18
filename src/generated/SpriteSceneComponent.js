import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class SpriteSceneComponent extends React.Component {
  constructor (props) {
    super(props)
    const { name, scene, scene } = props
    this.SpriteSceneComponent = new BABYLON.SpriteSceneComponent(scene)
    this.SpriteSceneComponent.name = name
    this.SpriteSceneComponent.scene = scene
  }

  render () {
    return null
  }
}

export default withScene(SpriteSceneComponent)

