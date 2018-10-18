import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class LensRenderingPipeline extends React.Component {
  constructor (props) {
    super(props)
    const { LensChromaticAberrationEffect, HighlightsEnhancingEffect, LensDepthOfFieldEffect, name, parameters, scene, ratio, cameras } = props
    this.LensRenderingPipeline = new BABYLON.LensRenderingPipeline(name, parameters, scene, ratio, cameras)
    this.LensRenderingPipeline.LensChromaticAberrationEffect = LensChromaticAberrationEffect
    this.LensRenderingPipeline.HighlightsEnhancingEffect = HighlightsEnhancingEffect
    this.LensRenderingPipeline.LensDepthOfFieldEffect = LensDepthOfFieldEffect
  }

  render () {
    return null
  }
}

export default withScene(LensRenderingPipeline)

