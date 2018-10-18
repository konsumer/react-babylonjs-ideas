import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class Layer extends React.Component {
  constructor (props) {
    super(props)
    const { name, texture, isBackground, color, scale, offset, alphaBlendingMode, alphaTest, layerMask, onDisposeObservable, onDispose, onBeforeRenderObservable, onBeforeRender, onAfterRenderObservable, onAfterRender, name, imgUrl, scene, isBackground, color } = props
    this.Layer = new BABYLON.Layer(name, imgUrl, scene, isBackground, color)
    this.Layer.name = name
    this.Layer.texture = texture
    this.Layer.isBackground = isBackground
    this.Layer.color = color
    this.Layer.scale = scale
    this.Layer.offset = offset
    this.Layer.alphaBlendingMode = alphaBlendingMode
    this.Layer.alphaTest = alphaTest
    this.Layer.layerMask = layerMask
    this.Layer.onDisposeObservable = onDisposeObservable
    this.Layer.onDispose = onDispose
    this.Layer.onBeforeRenderObservable = onBeforeRenderObservable
    this.Layer.onBeforeRender = onBeforeRender
    this.Layer.onAfterRenderObservable = onAfterRenderObservable
    this.Layer.onAfterRender = onAfterRender
  }

  render () {
    return null
  }
}

export default withScene(Layer)

