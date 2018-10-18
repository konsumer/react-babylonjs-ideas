import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class EffectLayer extends React.Component {
  constructor (props) {
    super(props)
    const { name, neutralColor, isEnabled, camera, renderingGroupId, onDisposeObservable, onBeforeRenderMainTextureObservable, onBeforeComposeObservable, onAfterComposeObservable, onSizeChangedObservable, name, scene } = props
    this.EffectLayer = new BABYLON.EffectLayer(name, scene)
    this.EffectLayer.name = name
    this.EffectLayer.neutralColor = neutralColor
    this.EffectLayer.isEnabled = isEnabled
    this.EffectLayer.camera = camera
    this.EffectLayer.renderingGroupId = renderingGroupId
    this.EffectLayer.onDisposeObservable = onDisposeObservable
    this.EffectLayer.onBeforeRenderMainTextureObservable = onBeforeRenderMainTextureObservable
    this.EffectLayer.onBeforeComposeObservable = onBeforeComposeObservable
    this.EffectLayer.onAfterComposeObservable = onAfterComposeObservable
    this.EffectLayer.onSizeChangedObservable = onSizeChangedObservable
  }

  render () {
    return null
  }
}

export default withScene(EffectLayer)

