import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class LensFlareSystemSceneComponent extends React.Component {
  constructor (props) {
    super(props)
    const { name, scene, scene } = props
    this.LensFlareSystemSceneComponent = new BABYLON.LensFlareSystemSceneComponent(scene)
    this.LensFlareSystemSceneComponent.name = name
    this.LensFlareSystemSceneComponent.scene = scene
  }

  render () {
    return null
  }
}

export default withScene(LensFlareSystemSceneComponent)

