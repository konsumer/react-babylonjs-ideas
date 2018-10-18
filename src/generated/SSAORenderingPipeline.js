import React from 'react'

class SSAORenderingPipeline extends React.Component {
  constructor (props) {
    super(props)
    const { SSAOOriginalSceneColorEffect, SSAORenderEffect, SSAOBlurHRenderEffect, SSAOBlurVRenderEffect, SSAOCombineRenderEffect, totalStrength, radius, area, fallOff, base } = props
    this.SSAORenderingPipeline = new SSAORenderingPipeline(SSAOOriginalSceneColorEffect, SSAORenderEffect, SSAOBlurHRenderEffect, SSAOBlurVRenderEffect, SSAOCombineRenderEffect, totalStrength, radius, area, fallOff, base)
  }

  render () {
    return null
  }
}

export default SSAORenderingPipeline

