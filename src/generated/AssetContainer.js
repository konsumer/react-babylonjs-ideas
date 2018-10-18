import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class AssetContainer extends React.Component {
  constructor (props) {
    super(props)
    const { scene, scene } = props
    this.AssetContainer = new BABYLON.AssetContainer(scene)
    this.AssetContainer.scene = scene
  }

  render () {
    return null
  }
}

export default withScene(AssetContainer)

