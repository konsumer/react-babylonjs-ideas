import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class SimplicationQueueSceneComponent extends React.Component {
  constructor (props) {
    super(props)
    const { name, scene, scene } = props
    this.SimplicationQueueSceneComponent = new BABYLON.SimplicationQueueSceneComponent(scene)
    this.SimplicationQueueSceneComponent.name = name
    this.SimplicationQueueSceneComponent.scene = scene
  }

  render () {
    return null
  }
}

export default withScene(SimplicationQueueSceneComponent)

