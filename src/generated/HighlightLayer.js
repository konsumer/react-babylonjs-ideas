import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class HighlightLayer extends React.Component {
  constructor (props) {
    super(props)
    const { name, EffectName, NeutralColor, GlowingMeshStencilReference, NormalMeshStencilReference, innerGlow, outerGlow, blurHorizontalSize, blurVerticalSize, onBeforeBlurObservable, onAfterBlurObservable, name, scene, options } = props
    this.HighlightLayer = new BABYLON.HighlightLayer(name, scene, options)
    this.HighlightLayer.name = name
    this.HighlightLayer.EffectName = EffectName
    this.HighlightLayer.NeutralColor = NeutralColor
    this.HighlightLayer.GlowingMeshStencilReference = GlowingMeshStencilReference
    this.HighlightLayer.NormalMeshStencilReference = NormalMeshStencilReference
    this.HighlightLayer.innerGlow = innerGlow
    this.HighlightLayer.outerGlow = outerGlow
    this.HighlightLayer.blurHorizontalSize = blurHorizontalSize
    this.HighlightLayer.blurVerticalSize = blurVerticalSize
    this.HighlightLayer.onBeforeBlurObservable = onBeforeBlurObservable
    this.HighlightLayer.onAfterBlurObservable = onAfterBlurObservable
  }

  render () {
    return null
  }
}

export default withScene(HighlightLayer)

