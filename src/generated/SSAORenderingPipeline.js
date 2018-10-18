import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class SSAORenderingPipeline extends React.Component {
  constructor (props) {
    super(props)
    const { SSAOOriginalSceneColorEffect, SSAORenderEffect, SSAOBlurHRenderEffect, SSAOBlurVRenderEffect, SSAOCombineRenderEffect, totalStrength, radius, area, fallOff, base, name, scene, ratio, cameras } = props
    this.SSAORenderingPipeline = new BABYLON.SSAORenderingPipeline(name, scene, ratio, cameras)
    this.SSAORenderingPipeline.SSAOOriginalSceneColorEffect = SSAOOriginalSceneColorEffect
    this.SSAORenderingPipeline.SSAORenderEffect = SSAORenderEffect
    this.SSAORenderingPipeline.SSAOBlurHRenderEffect = SSAOBlurHRenderEffect
    this.SSAORenderingPipeline.SSAOBlurVRenderEffect = SSAOBlurVRenderEffect
    this.SSAORenderingPipeline.SSAOCombineRenderEffect = SSAOCombineRenderEffect
    this.SSAORenderingPipeline.totalStrength = totalStrength
    this.SSAORenderingPipeline.radius = radius
    this.SSAORenderingPipeline.area = area
    this.SSAORenderingPipeline.fallOff = fallOff
    this.SSAORenderingPipeline.base = base
  }

  render () {
    return null
  }
}

export default withScene(SSAORenderingPipeline)

