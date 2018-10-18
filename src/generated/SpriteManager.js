import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class SpriteManager extends React.Component {
  constructor (props) {
    super(props)
    const { name, sprites, renderingGroupId, layerMask, fogEnabled, isPickable, cellWidth, cellHeight, onDisposeObservable, onDispose, texture, name, imgUrl, capacity, cellSize, scene, epsilon, samplingMode } = props
    this.SpriteManager = new BABYLON.SpriteManager(name, imgUrl, capacity, cellSize, scene, epsilon, samplingMode)
    this.SpriteManager.name = name
    this.SpriteManager.sprites = sprites
    this.SpriteManager.renderingGroupId = renderingGroupId
    this.SpriteManager.layerMask = layerMask
    this.SpriteManager.fogEnabled = fogEnabled
    this.SpriteManager.isPickable = isPickable
    this.SpriteManager.cellWidth = cellWidth
    this.SpriteManager.cellHeight = cellHeight
    this.SpriteManager.onDisposeObservable = onDisposeObservable
    this.SpriteManager.onDispose = onDispose
    this.SpriteManager.texture = texture
  }

  render () {
    return null
  }
}

export default withScene(SpriteManager)

