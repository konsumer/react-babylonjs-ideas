import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class GlowLayer extends React.Component {
  constructor (props) {
    super(props)
    const { EffectName, DefaultBlurKernelSize, DefaultTextureRatio, blurKernelSize, intensity, customEmissiveColorSelector, customEmissiveTextureSelector, name, scene, options } = props
    this.GlowLayer = new BABYLON.GlowLayer(name, scene, options)
    this.GlowLayer.EffectName = EffectName
    this.GlowLayer.DefaultBlurKernelSize = DefaultBlurKernelSize
    this.GlowLayer.DefaultTextureRatio = DefaultTextureRatio
    this.GlowLayer.blurKernelSize = blurKernelSize
    this.GlowLayer.intensity = intensity
    this.GlowLayer.customEmissiveColorSelector = customEmissiveColorSelector
    this.GlowLayer.customEmissiveTextureSelector = customEmissiveTextureSelector
  }

  render () {
    return null
  }
}

export default withScene(GlowLayer)

