import React from 'react'

class SSAO2RenderingPipeline extends React.Component {
  constructor (props) {
    super(props)
    const { SSAOOriginalSceneColorEffect, SSAORenderEffect, SSAOBlurHRenderEffect, SSAOBlurVRenderEffect, SSAOCombineRenderEffect, totalStrength, maxZ, minZAspect, samples, textureSamples, expensiveBlur, radius, base } = props
    this.SSAO2RenderingPipeline = new SSAO2RenderingPipeline(SSAOOriginalSceneColorEffect, SSAORenderEffect, SSAOBlurHRenderEffect, SSAOBlurVRenderEffect, SSAOCombineRenderEffect, totalStrength, maxZ, minZAspect, samples, textureSamples, expensiveBlur, radius, base)
  }

  render () {
    return null
  }
}

export default SSAO2RenderingPipeline

