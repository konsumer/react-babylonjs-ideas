import React from 'react'

class LensRenderingPipeline extends React.Component {
  constructor (props) {
    super(props)
    const { LensChromaticAberrationEffect, HighlightsEnhancingEffect, LensDepthOfFieldEffect } = props
    this.LensRenderingPipeline = new LensRenderingPipeline(LensChromaticAberrationEffect, HighlightsEnhancingEffect, LensDepthOfFieldEffect)
  }

  render () {
    return null
  }
}

export default LensRenderingPipeline

