import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class OctreeSceneComponent extends React.Component {
  constructor (props) {
    super(props)
    const { name, scene, checksIsEnabled, scene } = props
    this.OctreeSceneComponent = new BABYLON.OctreeSceneComponent(scene)
    this.OctreeSceneComponent.name = name
    this.OctreeSceneComponent.scene = scene
    this.OctreeSceneComponent.checksIsEnabled = checksIsEnabled
  }

  render () {
    return null
  }
}

export default withScene(OctreeSceneComponent)

