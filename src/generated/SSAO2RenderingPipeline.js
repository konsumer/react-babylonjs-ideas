import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class SSAO2RenderingPipeline extends React.Component {
  constructor (props) {
    super(props)
    const { SSAOOriginalSceneColorEffect, SSAORenderEffect, SSAOBlurHRenderEffect, SSAOBlurVRenderEffect, SSAOCombineRenderEffect, totalStrength, maxZ, minZAspect, samples, textureSamples, expensiveBlur, radius, base, IsSupported, name, scene, ratio, cameras } = props
    this.SSAO2RenderingPipeline = new BABYLON.SSAO2RenderingPipeline(name, scene, ratio, cameras)
    this.SSAO2RenderingPipeline.SSAOOriginalSceneColorEffect = SSAOOriginalSceneColorEffect
    this.SSAO2RenderingPipeline.SSAORenderEffect = SSAORenderEffect
    this.SSAO2RenderingPipeline.SSAOBlurHRenderEffect = SSAOBlurHRenderEffect
    this.SSAO2RenderingPipeline.SSAOBlurVRenderEffect = SSAOBlurVRenderEffect
    this.SSAO2RenderingPipeline.SSAOCombineRenderEffect = SSAOCombineRenderEffect
    this.SSAO2RenderingPipeline.totalStrength = totalStrength
    this.SSAO2RenderingPipeline.maxZ = maxZ
    this.SSAO2RenderingPipeline.minZAspect = minZAspect
    this.SSAO2RenderingPipeline.samples = samples
    this.SSAO2RenderingPipeline.textureSamples = textureSamples
    this.SSAO2RenderingPipeline.expensiveBlur = expensiveBlur
    this.SSAO2RenderingPipeline.radius = radius
    this.SSAO2RenderingPipeline.base = base
    this.SSAO2RenderingPipeline.IsSupported = IsSupported
  }

  render () {
    return null
  }
}

export default withScene(SSAO2RenderingPipeline)

