import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class DefaultRenderingPipeline extends React.Component {
  constructor (props) {
    super(props)
    const { SharpenPostProcessId, ImageProcessingPostProcessId, FxaaPostProcessId, ChromaticAberrationPostProcessId, GrainPostProcessId, sharpen, bloom, depthOfField, fxaa, imageProcessing, chromaticAberration, grain, animations, sharpenEnabled, bloomKernel, bloomWeight, bloomThreshold, bloomScale, bloomEnabled, depthOfFieldEnabled, depthOfFieldBlurLevel, fxaaEnabled, samples, imageProcessingEnabled, glowLayerEnabled, chromaticAberrationEnabled, grainEnabled, name, hdr, scene, cameras, automaticBuild } = props
    this.DefaultRenderingPipeline = new BABYLON.DefaultRenderingPipeline(name, hdr, scene, cameras, automaticBuild)
    this.DefaultRenderingPipeline.SharpenPostProcessId = SharpenPostProcessId
    this.DefaultRenderingPipeline.ImageProcessingPostProcessId = ImageProcessingPostProcessId
    this.DefaultRenderingPipeline.FxaaPostProcessId = FxaaPostProcessId
    this.DefaultRenderingPipeline.ChromaticAberrationPostProcessId = ChromaticAberrationPostProcessId
    this.DefaultRenderingPipeline.GrainPostProcessId = GrainPostProcessId
    this.DefaultRenderingPipeline.sharpen = sharpen
    this.DefaultRenderingPipeline.bloom = bloom
    this.DefaultRenderingPipeline.depthOfField = depthOfField
    this.DefaultRenderingPipeline.fxaa = fxaa
    this.DefaultRenderingPipeline.imageProcessing = imageProcessing
    this.DefaultRenderingPipeline.chromaticAberration = chromaticAberration
    this.DefaultRenderingPipeline.grain = grain
    this.DefaultRenderingPipeline.animations = animations
    this.DefaultRenderingPipeline.sharpenEnabled = sharpenEnabled
    this.DefaultRenderingPipeline.bloomKernel = bloomKernel
    this.DefaultRenderingPipeline.bloomWeight = bloomWeight
    this.DefaultRenderingPipeline.bloomThreshold = bloomThreshold
    this.DefaultRenderingPipeline.bloomScale = bloomScale
    this.DefaultRenderingPipeline.bloomEnabled = bloomEnabled
    this.DefaultRenderingPipeline.depthOfFieldEnabled = depthOfFieldEnabled
    this.DefaultRenderingPipeline.depthOfFieldBlurLevel = depthOfFieldBlurLevel
    this.DefaultRenderingPipeline.fxaaEnabled = fxaaEnabled
    this.DefaultRenderingPipeline.samples = samples
    this.DefaultRenderingPipeline.imageProcessingEnabled = imageProcessingEnabled
    this.DefaultRenderingPipeline.glowLayerEnabled = glowLayerEnabled
    this.DefaultRenderingPipeline.chromaticAberrationEnabled = chromaticAberrationEnabled
    this.DefaultRenderingPipeline.grainEnabled = grainEnabled
  }

  render () {
    return null
  }
}

export default withScene(DefaultRenderingPipeline)

