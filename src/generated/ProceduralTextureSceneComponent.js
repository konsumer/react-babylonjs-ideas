import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class ProceduralTextureSceneComponent extends React.Component {
  constructor (props) {
    super(props)
    const { name, scene, scene } = props
    this.ProceduralTextureSceneComponent = new BABYLON.ProceduralTextureSceneComponent(scene)
    this.ProceduralTextureSceneComponent.name = name
    this.ProceduralTextureSceneComponent.scene = scene
  }

  render () {
    return null
  }
}

export default withScene(ProceduralTextureSceneComponent)

