import React from 'react'

class DefaultRenderingPipeline extends React.Component {
  constructor (props) {
    super(props)
    const { SharpenPostProcessId, ImageProcessingPostProcessId, FxaaPostProcessId, ChromaticAberrationPostProcessId, GrainPostProcessId, sharpen, bloom, depthOfField, fxaa, imageProcessing, chromaticAberration, grain, animations, sharpenEnabled, bloomKernel, bloomWeight, bloomThreshold, bloomScale, bloomEnabled, depthOfFieldEnabled, depthOfFieldBlurLevel, fxaaEnabled, samples, imageProcessingEnabled, glowLayerEnabled, chromaticAberrationEnabled, grainEnabled } = props
    this.DefaultRenderingPipeline = new DefaultRenderingPipeline(SharpenPostProcessId, ImageProcessingPostProcessId, FxaaPostProcessId, ChromaticAberrationPostProcessId, GrainPostProcessId, sharpen, bloom, depthOfField, fxaa, imageProcessing, chromaticAberration, grain, animations, sharpenEnabled, bloomKernel, bloomWeight, bloomThreshold, bloomScale, bloomEnabled, depthOfFieldEnabled, depthOfFieldBlurLevel, fxaaEnabled, samples, imageProcessingEnabled, glowLayerEnabled, chromaticAberrationEnabled, grainEnabled)
  }

  render () {
    return null
  }
}

export default DefaultRenderingPipeline

